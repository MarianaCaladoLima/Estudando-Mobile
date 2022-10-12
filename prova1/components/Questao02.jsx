import React from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import { useState } from 'react';

const Q2 = () => {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [res,setRes] = useState(0)

  function somar() {
    let h1 = parseInt(n1)
    let h2 = parseInt(n2)
    setRes(h1+h2)
  }

  function subtrair() {
    let h1 = parseInt(n1)
    let h2 = parseInt(n2)
    setRes(h1-h2)
  }

  function multiplicar() {
    let h1 = parseInt(n1)
    let h2 = parseInt(n2)
    setRes(h1*h2)
  }

  function dividir() {
    let h1 = parseInt(n1)
    let h2 = parseInt(n2)
    setRes(h1/h2)
  }

  return(
    <View>

    <View style={{flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center', marginTop:200}}>
    <View style={{margin:5}}>
      <TextInput style={{backgroundColor:'black', color: 'white'}}
        placeholder={"N1"}
        onChangeText= {(txt)=> setN1(txt)}
      />
    </View>

    <View style={{margin:5}}>
    <TextInput style={{backgroundColor:'black', color: 'white'}}
        placeholder={"N2"}
        onChangeText= {(txt)=> setN2(txt)}
      />
    </View>
    </View>

    <View style={{
      flex:1, flexDirection:'row', alignContent:'center', justifyContent:'center', margin:10
      }}>
        <Button title = "+" onPress={somar}/>
        <Button title = "-" onPress={subtrair}/>
        <Button title = "*" onPress={multiplicar}/>
        <Button title = "/" onPress={dividir}/>
    </View>

      <View>
      <Text>Resultado: {res}</Text>
      </View>
    
    </View>
  )
}

export default Q2;