import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ICompanies } from 'interfaces/companies';
import api from 'services/api';
import { useToast } from 'hooks/toast';
import companyImage from 'assets/images/img/empresa.jpg';
import { MdLocalPhone } from 'react-icons/md';

import { colors } from 'styles/colors';
import {
  Container,
  ContainerCompany,
  ContainerName,
  ContainerButtons,
  ContainerInfos,
} from './styles';

interface IUserId {
  id: string;
}

export function CompanyDetails(): JSX.Element {
  const location = useLocation<IUserId>();
  const [company, setCompany] = useState<ICompanies>({} as ICompanies);
  const { addError } = useToast();
  useEffect(() => {
    async function getCompany() {
      try {
        const response = await api.get(`companies/${location.state.id}`);
        if (response.data) setCompany(response.data);
      } catch (error) {
        addError('Erro ao carregar usuário');
      }
    }
    getCompany();
  }, [addError, location]);

  return (
    <Container>
      <ContainerCompany>
        <ContainerName>
          <img src={companyImage} alt={company.name} />
          <div className="informations">
            <h1>{company.name}</h1>
            <span>empresa@email.com</span>
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
      </ContainerCompany>
    </Container>
  );
}
