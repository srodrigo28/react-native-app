import styled from "styled-components/native";

// Criação de Componentes para uso

// export const KeyBoardView = styled.KeyBoardView`
//     flex: 1;
//     align-items: center;
//     justify-content: center;
//     background-color: gray
// `

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`
export const Title = styled.Text`
    
`
export const Input = styled.TextInput`
    border: 2px solid black;
    padding: 5px 20px;
    color: black;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
    height: 50px;
    margin: 5px;
`

export const ButtonSubmit = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-top: 20px;
    border-radius: 9px;
    background: #800080;
    align-items: center;
`

export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 6px;
`