import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: calc(100vw - 25rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25rem;
  overflow: auto;
  height: calc(100vh - 10rem);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-gray);
  height: 10rem;
  border-radius: 0 0 5px 5px;
  margin-left: 25rem;
  width: calc(100% - 25rem);
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--white);
  font-family: 'Offside', cursive;
  font-weight: 300;
`;
