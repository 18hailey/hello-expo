// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.box1}></View>
       <View style={styles.box2}></View>
       <View style={styles.box3}>
           <View style={{flex:1, backgroundColor: '#ff7f50'}}></View>
           <View style={{flex:2, backgroundColor: '#90ee90'}}></View>
           <View style={{flex:2, backgroundColor: '#f4a460'}}></View>
           <View style={{flex:1, backgroundColor: '#808000'}}></View>
       </View>
       <View style={styles.box4}></View>
       <View style={styles.box5}></View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  box1 :{
    flex: 1,
    backgroundColor: '#0000ff',
    borderWidth: 10,
    borderColor: '#ff0000',
  },
  box2 :{
    flex: 2,
    backgroundColor: '#006400',
  },
  box3 :{
    flex: 2,
    backgroundColor: '#808080',
    flexDirection: 'row',
    gap: 15,
  },
  box4 :{
    flex: 2,
    backgroundColor: '#663399',
  },
  box5 :{
    flex: 1,
    backgroundColor: '#808000',
  },
});
