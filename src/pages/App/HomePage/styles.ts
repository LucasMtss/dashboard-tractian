import styled from 'styled-components';
import DefaultPage from 'pages/App/_Background';

export const Container = styled(DefaultPage)``;

export const Chart = styled.div`
  background-color: var(--light-gray);
  border-radius: 15px;
  padding: 2rem;
  height: 40rem;
  margin-top: 4rem;
  overflow-x: auto;
  display: flex;
  justify-content: center;
`;
