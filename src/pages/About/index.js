import React, { Component } from 'react';
import { FaHandPeace } from 'react-icons/fa';
import { Container, Disclaimer, Title, MyButton } from './styles';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Disclaimer>
                    <Title>Hello world! <FaHandPeace/></Title>
                    <p>
                        Este app tem o intuito de demonstrar a utilização prática de uma API externa para consulta e exibição de imagens, nomes e letras de músicas e bandas.
                        Como aplicação de estudos, não há intenção de comercialização de informações nem de quaisquer ações que possam infringir os direitos autorais dos artistas
                        nem do Vagalume, fornecedor da API.
                    </p>
                    <MyButton to="/app">Ok, continuar!</MyButton>
                </Disclaimer>
            </Container>
        );
    }
}
