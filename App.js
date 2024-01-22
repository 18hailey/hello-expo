import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <View style={[styles.box, styles.box1]}></View>
       <View style={[styles.box, styles.box2]}></View>
       <View style={[styles.box, styles.box3]}></View>
       <View style={[styles.box, styles.box4]}></View>
       <View style={[styles.box, styles.box5]}></View>
    </SafeAreaView>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-end',
  }, 
  box: {
    width: '100%',
    height: '20%',
  },
  box1: {
    backgroundColor: 'skyblue',
  },
  box2: {
    backgroundColor: 'blue',
  },
  box3: {
    width: '50%',
    backgroundColor: 'black',
  },
  box4: {
    backgroundColor: 'gray',
  },
  box5: {
    backgroundColor: 'yellow',
  },
});
