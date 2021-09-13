import React from 'react';
import { Image } from 'react-native';
import { Title, Container, Imagens } from './styles';
import Logo from '../../assets/pokemon.png';

function Header(){
    return(
        <Container>
            {/* <Title>Header</Title> */}
            <Imagens
                style={{
                    resizeMode: "center",
                    width: 1000,
                }}
                source={Logo}
            />
        </Container>
    )
}
export default Header;