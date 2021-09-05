import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IUnity } from 'interfaces/unity';
import api from 'services/api';
import { useToast } from 'hooks/toast';
import companyImage from 'assets/images/img/empresa.jpg';
import { MdLocalPhone } from 'react-icons/md';

import { colors } from 'styles/colors';
import {
  Container,
  ContainerUnity,
  ContainerName,
  ContainerButtons,
  ContainerInfos,
} from './styles';

interface IUserId {
  id: string;
}

export function UnityDetails(): JSX.Element {
  const location = useLocation<IUserId>();
  const [unity, setUnity] = useState<IUnity>({} as IUnity);
  const { addError } = useToast();
  useEffect(() => {
    async function getUnity() {
      try {
        const response = await api.get(`units/${location.state.id}`);
        if (response.data) setUnity(response.data);
      } catch (error) {
        addError('Erro ao carregar unidade');
      }
    }
    getUnity();
  }, [addError, location]);

  return (
    <Container>
      <ContainerUnity>
        <ContainerName>
          <img src={companyImage} alt={unity.name} />
          <div className="informations">
            <h1>{unity.name}</h1>
            <span>Empresa: {unity.companyId}</span>
            <span>Juiz de Fora, MG</span>
          </div>
        </ContainerName>
        <ContainerInfos>
          <div>
            <MdLocalPhone fill={colors.white} size={30} />
            <span>Telefone: (32)3331-3569</span>
          </div>
        </ContainerInfos>

        <ContainerButtons>
          <button type="button" className="edit">
            Editar
          </button>
          <button type="button" className="delete">
            Excluir
          </button>
        </ContainerButtons>
      </ContainerUnity>
    </Container>
  );
}
