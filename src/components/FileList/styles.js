import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }


  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #444;
    border-radius:10px;
    background-color: #F0F8FF;
    box-shadow: #444;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size:  12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
  
`;

export const Preview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-image: url(${props => props.src });
  background-repeat:no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;