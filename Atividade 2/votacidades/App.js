import { StyleSheet, Text, View } from 'react-native';
import VotaCidade from './components/estados/VotaCidade';

export default function App() {
  return (
    <View style={styles.container}>
      <VotaCidade />
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
