import React from 'react'
import { 
    KeyBoardView,
    Conteiner,
    Title,
    Input,
    ButtonSubmit,

} from './styles'

function Formulario(){
    return(
        <KeyBoardView>
            <Title>Cadastra-se</Title>
            <Conteiner>
             <Input />
             <Input />
             <ButtonSubmit>
                <Title>Entrar</Title>
             </ButtonSubmit>
            </Conteiner>
        </KeyBoardView>
    )
}

export default Formulario;