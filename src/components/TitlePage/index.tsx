import { Title } from './styles';

interface IDefaultProps {
  children: string;
}

export function TitlePage({ children }: IDefaultProps): JSX.Element {
  return <Title>{children}</Title>;
}
