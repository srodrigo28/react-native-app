import React from 'react'
import {Input, Title, Container, ButtonSubmit, ButtonText} from './styles'
import { Image, SafeAreaView } from 'react-native';
import Pokemon from './../../assets/pokemon.png'

function Login(){
    return(
        <SafeAreaView>
            <Container>
                <Image
                    source={Pokemon}
                    style={{ 
                        width: 280, height: 40, marginLeft: 10, 
                        marginTop: 100, padding: 50,
                        marginBottom: 50
                    }}
                />
                <Title>Login</Title>
                <Input />
                <Input 
                    secureTextEntry
                />
                <ButtonSubmit>
                    <ButtonText>Entrar</ButtonText>
                </ButtonSubmit>
            </Container>
        </SafeAreaView>
    )
}
export default Login;