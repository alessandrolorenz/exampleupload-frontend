import React, { Component } from 'react';

import { Paragraph, Content } from './styles';

export default class Text01 extends Component {
  render() {
    return (
    <Content>
    <Paragraph>Projeto de estudo muito legal envolvendo uma série de tecnologias. É um sisteminha que grava fotos em um bucket S3 na AWS e salva as informações do aquivo em um banco de dados não relacional na núvem e depois disponibiliza um preview no qual o usuário pode acessar o link da foto ou deletá-la. </Paragraph>
    <Paragraph>Foi feito desde a criação de um backend com NodeJS, MongoDB Cloud, configuração de ambiente de desenvolvimento e de produção, variaveis de ambiente permitindo rodar o projeto localmente gravando no próprio computador.  O frontend foi desenvolvido com ReactJS e depois foi configurado para rodar backend e frontend no Heroku com deploy automático ligado com o github. Tudo isso foi feito seguindo o tutorual da Rocketseat: <a href="https://www.youtube.com/watch?v=MkkbUfcZUZM">https://www.youtube.com/watch?v=MkkbUfcZUZM</a>.</Paragraph>
    <Paragraph>Foi um exercício muito legal que envolveu uma porção de tecnologias bem bacanas. Fiz algumas customização e aprendi bastante. Muito bacana. </Paragraph>
    <h3>Tnx Rocketsear!!!</h3>
    <small><a href="alessandrolorenz.com">alessandrolorenz.com</a><br></br></small>
    <small><h4>github: </h4><a href="https://github.com/alessandrolorenz/uploadexample-backend">alessandrolorenz/uploadexample-backend</a><br></br></small>
    <small><a href="https://github.com/alessandrolorenz/exampleupload-frontend">alessandrolorenz/exampleupload-frontend</a></small>
    </Content>
    )
  }
}
