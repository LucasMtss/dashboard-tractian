import { ReactNode } from 'react';
import { Menu } from 'components/Menu';

import { Container, Content, Header, Title } from './styles';

interface BackgroundProps {
  children?: ReactNode;
}

function DefaultPage({ children, ...rest }: BackgroundProps): JSX.Element {
  return (
    <Container {...rest}>
      <Menu />
      <Header>
        <Title>Seja bem vindo, Lucas</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

export default DefaultPage;
