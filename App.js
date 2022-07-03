import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView ,Image,TouchableHighlight,Button,Alert,Platform} from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"green"}}>Application</Text>
      <Text style={{fontSize:20,color:"red"}}>Achiever First App</Text>
      <TouchableHighlight onPress={() =>console.log("Image Tapped")}>
      <Image
       style={styles.img} source={require("./assets/logo.gif")} />
      </TouchableHighlight>
      <Button title="click me" onPress={() => Alert.alert("Reviews","Do you Like My App",
      [{text:"yes",onPress: () => console.log("Yes")},
      {text:"no",onPress: () => console.log("No")}])} />
      <Text style={{color:"red",paddingTop:20}}>Created on date : 3rd July 2022</Text>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCF3EE",
    alignItems:'center',
    justifyContent:'center',
    paddingTop:Platform.OS === "android" ? 40:0
  },
  img:{
    width:200,
    height:200,
    borderRadius:40,
    marginBottom:10,
  }
});
