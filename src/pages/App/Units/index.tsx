import { useEffect, useState } from 'react';
import api from 'services/api';
import { TitlePage } from 'components/TitlePage';
import { IUnity } from 'interfaces/unity';
import { useToast } from 'hooks/toast';
import { useHistory } from 'react-router-dom';
import company from 'assets/images/img/empresa.jpg';

import { CardUnity, Container, ContainerCards } from './styles';

export function Units(): JSX.Element {
  const [units, setUnits] = useState<Array<IUnity>>([] as Array<IUnity>);
  const { addError } = useToast();
  const history = useHistory();

  useEffect(() => {
    async function getCompanies() {
      try {
        const response = await api.get('units');
        if (response.data) setUnits(response.data);
      } catch (error) {
        addError('Erro ao carregar unidades');
      }
    }
    getCompanies();
  }, [addError]);

  return (
    <Container>
      <TitlePage>Unidades</TitlePage>
      <ContainerCards>
        {units.map(obj => {
          return (
            <CardUnity
              key={obj.id}
              onClick={() =>
                history.push('detalhes-da-unidade', { id: obj.id })
              }
            >
              <div className="container-informations">
                <img src={company} alt={obj.name} />
                <div className="informations">
                  <h1>{obj.name}</h1>
                  <span>Empresa: {obj.companyId}</span>
                </div>
              </div>
            </CardUnity>
          );
        })}
      </ContainerCards>
    </Container>
  );
}
