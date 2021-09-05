import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IUsers } from 'interfaces/users';
import api from 'services/api';
import { useToast } from 'hooks/toast';
import worker from 'assets/images/img/trabalhador.jpg';
import { MdBusiness, MdLocationOn } from 'react-icons/md';

import { colors } from 'styles/colors';
import {
  Container,
  ContainerUser,
  ContainerUserName,
  ContainerButtons,
  ContainerInfos,
} from './styles';

interface IUserId {
  id: string;
}

export function UserDetails(): JSX.Element {
  const location = useLocation<IUserId>();
  const [user, setUser] = useState<IUsers>({} as IUsers);
  const { addError } = useToast();
  useEffect(() => {
    async function getuser() {
      try {
        const response = await api.get(`users/${location.state.id}`);
        if (response.data) setUser(response.data);
      } catch (error) {
        addError('Erro ao carregar usuário');
      }
    }
    getuser();
  }, [addError, location]);

  return (
    <Container>
      <ContainerUser>
        <ContainerUserName>
          <img src={worker} alt={user.name} />
          <div className="informations">
            <h1>{user.name}</h1>
            <span>{user.email}</span>
          </div>
        </ContainerUserName>
        <ContainerInfos>
          <div>
            <MdBusiness fill={colors.white} size={30} />
            <span>Empresa: {user.companyId}</span>
          </div>
          <div>
            <MdLocationOn fill={colors.white} size={30} />
            <span>Unidade: {user.companyId}</span>
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
      </ContainerUser>
    </Container>
  );
}
