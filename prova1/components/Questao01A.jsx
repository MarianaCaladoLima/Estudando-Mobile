import * as React from 'react';
import { Text, View } from 'react-native';

function Q1A(props) {
  return (
    <View>
      <Text> NOME: {props.nome}</Text>
      <Text> SOBRENOME: {props.sobrenome} </Text>
      <Text> CURSO: {props.curso} </Text>
      {props.children}
    </View>
  );
}

export default Q1A;