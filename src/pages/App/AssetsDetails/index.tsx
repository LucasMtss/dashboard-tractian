import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IAssets } from 'interfaces/assets';
import api from 'services/api';
import { useToast } from 'hooks/toast';
import { FaTemperatureLow } from 'react-icons/fa';
import { IoPower, IoSpeedometerOutline } from 'react-icons/io5';

import { colors } from 'styles/colors';
import {
  Container,
  ContainerAsset,
  ContainerAssetName,
  ContainerButtons,
  ContainerMetrics,
  ContainerSpecifications,
  Status,
} from './styles';

interface IAssetId {
  id: string;
}

export function AssetsDetails(): JSX.Element {
  const location = useLocation<IAssetId>();
  const [assets, setAssets] = useState<IAssets>({} as IAssets);
  const { addError } = useToast();
  useEffect(() => {
    async function getAssets() {
      try {
        const response = await api.get(`assets/${location.state.id}`);
        if (response.data) setAssets(response.data);
      } catch (error) {
        addError('Erro ao carregar ativo');
      }
    }
    getAssets();
  }, [addError, location]);

  function handleGetStatusColor(
    status: 'inAlert' | 'inOperation' | 'inDowntime',
  ) {
    if (status === 'inAlert') return colors.yellow;
    if (status === 'inOperation') return colors.green;
    if (status === 'inDowntime') return colors.red;
    return colors.green;
  }

  function handleGetLastUpdate(date: string) {
    let reverseDate;
    let correctDate = '';
    if (date) {
      reverseDate = date.substring(0, 10).split('-', 3);
      correctDate = `${reverseDate[2]}/${reverseDate[1]}/${
        reverseDate[0]
      } - ${date.substring(11, 16)}h`;
    }
    return correctDate;
  }

  handleGetLastUpdate(assets.metrics?.lastUptimeAt);

  return (
    <Container>
      <ContainerAsset>
        <ContainerAssetName>
          <div className="primary">
            <img src={assets.image} alt={assets.name} />
            <div className="informations">
              <h1>{assets.name}</h1>
              <span>Saúde: {assets.healthscore}%</span>
              <span>Tipo: {assets.model}</span>
            </div>
          </div>
          <div className="status">
            <Status theme={{ color: handleGetStatusColor(assets.status) }}>
              {assets.status}
            </Status>
          </div>
        </ContainerAssetName>
        <ContainerSpecifications>
          {assets.specifications?.maxTemp ? (
            <div className="specification">
              <FaTemperatureLow fill={colors.black} size={30} />
              <span>
                Temperatura máxima: {assets.specifications.maxTemp} ºC
              </span>
            </div>
          ) : (
            <></>
          )}
          {assets.specifications?.power ? (
            <div className="specification">
              <IoPower fill={colors.black} size={30} />
              <span>Potência: {assets.specifications.power} kWh</span>
            </div>
          ) : (
            <></>
          )}
          {assets.specifications?.rpm ? (
            <div className="specification">
              <IoSpeedometerOutline fill={colors.black} size={30} />
              <span>RPM: {assets.specifications.rpm}</span>
            </div>
          ) : (
            <></>
          )}
        </ContainerSpecifications>
        <ContainerMetrics>
          {assets.metrics?.totalCollectsUptime ? (
            <span>
              Total de coletas uptime: {assets.metrics.totalCollectsUptime}
            </span>
          ) : (
            <></>
          )}
          {assets.metrics?.totalCollectsUptime ? (
            <span>
              Total de coletas uptime: {assets.metrics.totalCollectsUptime}
            </span>
          ) : (
            <></>
          )}
          {assets.metrics?.lastUptimeAt ? (
            <span>
              <span>
                Data da última coleta:{' '}
                {handleGetLastUpdate(assets.metrics.lastUptimeAt)}
              </span>
            </span>
          ) : (
            <></>
          )}
        </ContainerMetrics>
        <ContainerButtons>
          <button type="button" className="edit">
            Editar
          </button>
          <button type="button" className="delete">
            Excluir
          </button>
        </ContainerButtons>
      </ContainerAsset>
    </Container>
  );
}
