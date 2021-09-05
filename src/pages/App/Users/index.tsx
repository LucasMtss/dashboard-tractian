import { useEffect, useState } from 'react';
import api from 'services/api';
import { TitlePage } from 'components/TitlePage';
import { IUsers } from 'interfaces/users';
import { useToast } from 'hooks/toast';
import { useHistory } from 'react-router-dom';
import worker from 'assets/images/img/trabalhador.jpg';

import { CardUsers, Container, ContainerCards } from './styles';

export function Users(): JSX.Element {
  const [users, setUsers] = useState<Array<IUsers>>([] as Array<IUsers>);
  const { addError } = useToast();
  const history = useHistory();

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get('users');
        if (response.data) setUsers(response.data);
      } catch (error) {
        addError('Erro ao carregar usuários');
      }
    }
    getUsers();
  }, [addError]);

  return (
    <Container>
      <TitlePage>Usuários</TitlePage>
      <ContainerCards>
        {users.map(obj => {
          return (
            <CardUsers
              key={obj.id}
              onClick={() =>
                history.push('detalhes-do-usuario', { id: obj.id })
              }
            >
              <div className="container-informations">
                <img src={worker} alt={obj.name} />
                <div className="informations">
                  <h1>{obj.name}</h1>
                  <span>{obj.email}</span>
                </div>
              </div>
              <div className="container-company">
                <span>
                  Empresa: {obj.companyId} - Unidade: {obj.unitId}
                </span>
              </div>
            </CardUsers>
          );
        })}
      </ContainerCards>
    </Container>
  );
}
