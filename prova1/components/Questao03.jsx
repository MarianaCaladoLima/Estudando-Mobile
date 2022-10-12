import React from "react";
import { View, Text, Image, Button } from "react-native"
import { useState, useEffect } from "react"

const Q3 = ()=> {
    const [id,setId] = useState(0)
    const [poke,setpoke] = useState([])
    const [frontImage,setFrontImage] = useState('')

    function aumentar(){
      setId(id + 10)
    }

    useEffect(
        ()=>{

           fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${id}`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setpoke(resultado.results)
                setFrontImage(resultado.sprites.front_default)
              }
           )
        }
    )

    return (
        <View style={{backgroundColor:'white', marginTop:200}}>
          <Text style={{fontSize:20}}>Pokemons:</Text>
            { poke.map((number) => <Text style={styles.texto}>{number.name}</Text>)}
            <View style={styles.images}>
                <Image source={{uri:frontImage,width:150,height:150}} />
            </View>
            <Button title={'Próximos 10 pokemons'} onPress={aumentar}></Button>
        </View>
    )
}

export default Q3;