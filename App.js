import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/Questao01';
import Questao02 from './components/Questao02';
import Questao03 from './components/Questao03';
import Questao04 from './components/Questao04';


export default function App() {
  return (
    <View style={styles.container}>
      <Questao01/>
      <Questao02/>
      <Questao03/>
      <Questao04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
