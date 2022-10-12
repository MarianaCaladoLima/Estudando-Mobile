import * as React from 'react';
import { Text, View } from 'react-native';
import Questao01A from './components/Questao01A';
import Questao01B from './components/Questao01B';

function Q1() {
  return (
    <View>
      <Text style={{fontSize: 30, backgroundColor:'white'}}>DADOS</Text>
      <Questao01A nome={'Mariana'} sobrenome={'Calado'} curso={'Design Digital'}/>
      <Questao01B/>
    </View>
  );
}

export default Q1;