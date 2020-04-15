import styled from 'styled-components';

export const Container = styled.div `
/* tudo centralizado */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div `
/* tudo centralizado */
  width: 100%;
  max-width: 500px;
  margin: 30px;
  background: #FFF;
  border-radius: 4px;
  padding: 20px;

  h2 {
    margin-bottom: 25px;
    color: #4682B4;
    text-align: center;
  }

`;