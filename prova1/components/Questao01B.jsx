import * as React from 'react';
import { Text, View } from 'react-native';

function Q1B() {
    const disciplinas = ["Mobile, CDP, Empreendedorismo, Design e Inovacao, Desenho 2, P4"];

    return (
    <View>
        <Text> DISCIPLINAS</Text>
       {disciplinas.map((disciplina) => (
         <ul>{disciplina}</ul>
       ))}
    </View>
  );
}

export default Q1B;