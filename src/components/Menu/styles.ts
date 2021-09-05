import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  position: fixed;
  left: 0;
  top: 0;
  background-color: var(--dark-gray);
  height: 100vh;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 1rem;
  margin-top: 2rem;
  cursor: pointer;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

export const Button = styled.button`
  width: 100%;
  background-color: var(--middle-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  color: var(--white);
  margin-bottom: 1rem;
  border: none;
  transition: all 300ms;

  span {
    font-family: 'Offside', cursive;
    font-size: 1.5rem;
    text-align: center;
    transition: all 300ms;
  }

  :hover {
    background-color: var(--black);
    span {
      font-size: 1.6rem;
    }
  }
`;
