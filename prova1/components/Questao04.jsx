import React from "react";
import { View, Text, Button } from "react-native"
import { useState, useEffect } from "react"

const Q4 = ()=> {
    const [resultado, setresultado] = useState([])
    const [paises, setpaises] = useState([])

    function calcular(){
      
      var Totpop = 0
      var posicao = 0
   
      for(var i=0;i<paises.length;i++){

        
        if( Totpop< paises[i].population){
          Totpop = paises[i].population
          posicao = i
          setresultado(paises[posicao].name)
        }
      }

      console.log(Totpop);
      console.log(posicao);
    }

    useEffect(
        ()=>{

           fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setpaises(resultado);
              }
           )
        } 
    )

    return (
        <View>
          <Text>Países:</Text>
            { paises.map((number) => <Text>{number.name} {number.population}</Text>)}
            <Button title={'Qual mais populoso?'} onPress={calcular}></Button>
            <Text>Resultado:{resultado}</Text>
        </View>
    )
}

export default Q4;