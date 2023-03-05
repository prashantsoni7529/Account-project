import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import NavTabs from './components/BottomTabNavigator';

export default function App() {
  return (

    <>
     <NavTabs/>
     {/* <Login/>  */}
    </>
     


  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//        <Text>Hello Prashant Soni This is my React Native expo app update</Text>
//       <NavTabs/>
//        <Login/> 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }});
