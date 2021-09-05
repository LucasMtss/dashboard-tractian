import styled from 'styled-components';
import DefaultPage from 'pages/App/_Background';

export const Container = styled(DefaultPage)``;

export const ContainerUser = styled.div`
  background-color: var(--middle-gray);
  display: flex;
  border-radius: 15px;
  width: 90%;
  margin-top: 4rem;
  padding: 1rem 2rem 2rem 2rem;
  flex-direction: column;
`;

export const ContainerUserName = styled.div`
  display: flex;
  width: 100%;

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
`;

export const ContainerInfos = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    span {
      color: var(--white);
      font-size: 1.5rem;
      margin-left: 1rem;
    }
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
