import { useEffect, useState } from 'react';
import api from 'services/api';
import { TitlePage } from 'components/TitlePage';
import { ICompanies } from 'interfaces/companies';
import { useToast } from 'hooks/toast';
import { useHistory } from 'react-router-dom';
import company from 'assets/images/img/empresa.jpg';

import { CardCompany, Container, ContainerCards } from './styles';

export function Companies(): JSX.Element {
  const [copanies, setCompanies] = useState<Array<ICompanies>>(
    [] as Array<ICompanies>,
  );
  const { addError } = useToast();
  const history = useHistory();

  useEffect(() => {
    async function getCompanies() {
      try {
        const response = await api.get('companies');
        if (response.data) setCompanies(response.data);
      } catch (error) {
        addError('Erro ao carregar empresas');
      }
    }
    getCompanies();
  }, [addError]);

  return (
    <Container>
      <TitlePage>Empresas</TitlePage>
      <ContainerCards>
        {copanies.map(obj => {
          return (
            <CardCompany
              key={obj.id}
              onClick={() =>
                history.push('detalhes-da-empresa', { id: obj.id })
              }
            >
              <div className="container-informations">
                <img src={company} alt={obj.name} />
                <div className="informations">
                  <h1>{obj.name}</h1>
                </div>
              </div>
            </CardCompany>
          );
        })}
      </ContainerCards>
    </Container>
  );
}
