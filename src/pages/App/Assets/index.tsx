import { useEffect, useState } from 'react';
import api from 'services/api';
import { TitlePage } from 'components/TitlePage';
import { IAssets } from 'interfaces/assets';
import { useToast } from 'hooks/toast';
import { useHistory } from 'react-router-dom';

import { colors } from 'styles/colors';
import { CardAssets, Container, ContainerCards, Status } from './styles';

export function Assets(): JSX.Element {
  const [assets, setAssets] = useState<Array<IAssets>>([] as Array<IAssets>);
  const { addError } = useToast();
  const history = useHistory();

  useEffect(() => {
    async function getAssets() {
      try {
        const response = await api.get('assets');
        if (response.data) setAssets(response.data);
      } catch (error) {
        addError('Erro ao carregar ativos');
      }
    }
    getAssets();
  }, [addError]);

  function handleGetStatusColor(
    status: 'inAlert' | 'inOperation' | 'inDowntime',
  ) {
    if (status === 'inAlert') return colors.yellow;
    if (status === 'inOperation') return colors.green;
    if (status === 'inDowntime') return colors.red;
    return colors.green;
  }

  return (
    <Container>
      <TitlePage>Ativos</TitlePage>
      <ContainerCards>
        {assets.map(obj => {
          return (
            <CardAssets
              key={obj.id}
              onClick={() => history.push('detalhes-do-ativo', { id: obj.id })}
            >
              <div className="container-informations">
                <img src={obj.image} alt={obj.name} />
                <div className="informations">
                  <h1>{obj.name}</h1>
                  <span>Saúde: {obj.healthscore}%</span>
                  <span>Tipo: {obj.model}</span>
                </div>
              </div>
              <div className="container-status">
                <Status theme={{ color: handleGetStatusColor(obj.status) }}>
                  {obj.status}
                </Status>
              </div>
            </CardAssets>
          );
        })}
      </ContainerCards>
    </Container>
  );
}
