import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';
import Form from './pages/Form';
import Header from './components/Header';
// import Contador from './components/Contador';
import { KeyBoardView } from './pages/Signin/style';

export default function App(){
  return (
    <KeyBoardView>
      <StatusBar style="dark" />
      <Header/>
      <Signin />
      <Form /> 
      {/* <Contador /> */}
    </KeyBoardView>
  );
}