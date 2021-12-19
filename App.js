import react,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Button,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Eng({navigation}) {
  const [data1,setdata1] = useState("");
  const [data2,setdata2] = useState("");
  const [data3,setdata3] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.datacontainer}>
          <Text style={styles.text1}>data1</Text>
          <Text style={styles.text1}>data2</Text>
          <Text style={styles.text1}>data3</Text>
        </View>
        <View style={styles.datacontainer}>
          <Text style={styles.text1}>data4</Text>
          <Text style={styles.text1}>data5</Text>
          <Text style={styles.text1}>data6</Text>

        </View>
        <View style={styles.buttonview}>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.text1}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.text1}>Automation</Text>
            </TouchableOpacity>       
        </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App( {navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login Screen" component={login} />
        <Stack.Screen name = "Engineer Screen" component={Eng} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function login({navigation}){

  const [user,setuser] = useState("");
  const [pass,setpass] = useState("");


  const logging=()=>{
    if(user=="eng"){
      if(pass=='eng'){
        navigation.navigate('Engineer Screen');
        setuser("")
        setpass("")
      }
    }
  }
  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <View style={styles.login}>
          <View style={styles.user}>
            <Text style={styles.text}>User</Text>
            <TextInput style={styles.textinput} 
              value={user} 
              onChangeText={(val)=>setuser(val)}
              placeholder="username"/>
          </View>
          <View style={styles.user}>
            <Text style={styles.text}>Pass</Text>
            <TextInput style={styles.textinput}
              value={pass}
              onChangeText={(val)=>setpass(val)}
              placeholder="password"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={logging}>
            <Text style={styles.text}>Log In</Text>
          </TouchableOpacity>

        </View>
      </View>   
    </SafeAreaView> 
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width:'100%',
    height:'100%',
    justifyContent: 'center',
  },
  login:{
    justifyContent:'center',
    alignItems:'center',
    height:"50%",
    width:"70%",
    borderWidth:4,
    borderRadius:10,
    borderColor:'cyan',
    backgroundColor:'#ffeaa7'
  },
  text:{
    fontSize:24,
    fontFamily:'Arial',
    color:'#0652DD',
    paddingRight:"10%"
  },
  textinput:{
    fontSize:24,
    fontFamily:'Arial',
    borderRadius:10,
    borderWidth:4,
    width:'60%',
    borderColor:'green'
  },
  user:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  button:{
    backgroundColor:'#A3CB38',
    borderWidth:4,
    borderRadius:8,
    width:"50%",
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },


//eng screen
  button1:{
    backgroundColor:'#A3CB38',
    borderWidth:4,
    borderRadius:8,
    width:'40%',
    height:'20%',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  text1:{
    fontSize:24,
    fontFamily:'Arial',
    color:'#0652DD',
    alignItems:'center'
  },
  datacontainer:{
    margin:10,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  buttonview:{
    flex:1,
    margin:10,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  }  
});


export default App;