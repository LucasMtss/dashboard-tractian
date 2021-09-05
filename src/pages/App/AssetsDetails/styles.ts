import styled from 'styled-components';
import DefaultPage from 'pages/App/_Background';

export const Container = styled(DefaultPage)``;

export const ContainerAsset = styled.div`
  background-color: var(--middle-gray);
  display: flex;
  border-radius: 15px;
  width: 90%;
  margin-top: 4rem;
  padding: 1rem 2rem 2rem 2rem;
  flex-direction: column;
`;

export const ContainerAssetName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  div.primary {
    display: flex;
  }

  img {
    width: 15rem;
    height: 10rem;
    border: solid 2px var(--white);
    border-radius: 5px;
    margin-right: 1rem;
  }

  div.informations {
    display: flex;
    flex-direction: column;

    h1 {
      color: var(--white);
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.3rem;
      line-height: 2rem;
      color: var(--white);
    }
  }

  div.status {
    display: flex;
    justify-content: flex-end;
    height: fit-content;
  }
`;

export const Status = styled.span`
  background-color: var(--light-gray);
  padding: 0.5rem 1rem;
  color: ${props => props.theme.color};
  font-size: 1rem;
  border-radius: 5px;
  font-weight: bold;
`;

export const ContainerSpecifications = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;

  div.specification {
    background-color: var(--light-gray);
    padding: 1rem;
    display: flex;
    width: 45%;
    margin-bottom: 1rem;
    border-radius: 10px;
    align-items: center;

    span {
      margin-left: 1rem;
      font-size: 1.3rem;
    }
  }
`;

export const ContainerMetrics = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem;
  background-color: var(--light-gray);
  border-radius: 10px;

  span {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    background-color: var(--light-gray);
    width: 12rem;
    border-radius: 10px;
    font-size: 1.3rem;
    padding: 1rem;
    border: none;
    margin: 0 2rem;
    font-weight: bold;
  }

  button.edit {
    color: var(--green);
  }

  button.delete {
    color: var(--red);
  }
`;
