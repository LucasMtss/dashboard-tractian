import styled from 'styled-components';
import DefaultPage from 'pages/App/_Background';

export const Container = styled(DefaultPage)``;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardAssets = styled.div`
  background-color: var(--middle-gray);
  border-radius: 10px;
  display: flex;
  padding: 1rem 1rem 0.5rem 0.5rem;
  flex-direction: column;
  width: 27rem;
  margin-bottom: 2rem;
  justify-content: space-between;
  cursor: pointer;

  div.container-informations {
    display: flex;

    img {
      width: 10rem;
      height: 7rem;
      border-radius: 5px;
      margin-right: 1rem;
      border: solid 2px var(--light-gray);
    }

    div.informations {
      display: flex;
      flex-direction: column;
      h1 {
        color: var(--white);
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      span {
        font-size: 1.2rem;
        color: var(--white);
      }
    }
  }

  div.container-status {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Status = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.color};
`;
