import logo from 'assets/images/img/Logo.svg';
import { useHistory } from 'react-router-dom';
import { Button, Container, ContainerButtons, Logo } from './styles';

export function Menu(): JSX.Element {
  const history = useHistory();
  return (
    <Container>
      <Logo src={logo} alt="Tractian" onClick={() => history.push('home')} />
      <ContainerButtons>
        <Button onClick={() => history.push('ativos')}>
          <span>Ativos</span>
        </Button>
        <Button onClick={() => history.push('usuarios')}>
          <span>Usuários</span>
        </Button>
        <Button onClick={() => history.push('empresas')}>
          <span>Empresas</span>
        </Button>
        <Button onClick={() => history.push('unidades')}>
          <span>Unidades</span>
        </Button>
      </ContainerButtons>
    </Container>
  );
}
