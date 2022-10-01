import { View, Text, Button } from 'react-native'
import {useState} from 'react'

const VotaCidade = () => {
const [QX, setQX] = useState(0)
const [QM, setQM] = useState(0)
const [IB, setIB] = useState(0)
const [cidade, setCidade] = useState('')

const acaoQuix = () => {
  setQX(QX+1)
  console.log ("Quixas: "+ QX)
}

const acaoQuim = () => {
  setQM(QM+1)
  console.log ("Quim: "+ QM)
}

const acaoIbic = () => {
  setIB(IB+1)
  console.log ("Ibic: "+ IB)
}

const maisVotadaCidade = () => {
  let i = 0

  if (i < QX) {
    i = QX
    setCidade("Quixadá")
  }

  if (i < QM) {
    i = QM
    setCidade("Quixeramobim")
  }

  if (i < IB) {
    i = IB
    setCidade("Ibicuitinga")
  }

  console.log(i)
  console.log(cidade)

}
    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixadá: {QX} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim: {QM} </Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga: {IB} </Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress={acaoQuix}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim' onPress={acaoQuim}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga' onPress={acaoIbic}/>
                </View>
            </View>
            <View style={{margin:5}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Cidade mais votada: {cidade}</Text>
                </View>
            <View style={{margin:5}}>
                    <Button title='Cidade com mais votos' onPress={maisVotadaCidade}/>
                </View>
        </View>
  )
}
export default VotaCidade