
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
// import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
   const [email , setEmail]=useState();
   const [password , setPassword]=useState();

   const navigation= useNavigation();

   const handleSubmit=()=>{

   }




  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:"white", alignItems:"center"}}>
   <View style={{marginTop:50}}>
   <Text style={{fontSize:25}}>Job-Portal</Text>
   </View>


   <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 25 ,color:"black"}}>
            Login to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
        <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 0,
              borderRadius: 5,
            }}
          >
            {/* <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            /> */}
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 5,
                width: 300,
                height:40,
                fontSize: email ? 16 : 16,
                paddingLeft:20
              }}
              placeholder="Enter your Email"
            />
          </View>
          <View style={{ marginTop: 30 }}></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 0,
              borderRadius: 5,
            }}
          >
            {/* <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            /> */}
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 5,
                width: 300,
                height:40,
                fontSize: email ? 16 : 16,
                paddingLeft:20
              }}
              placeholder="Enter your Password"
            />
          </View>
          <View style={{display:"flex",flexDirection:"row" , color:"black", paddingTop:5,alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,}}>
           <Text style={{color:"black"}}>keep me logged in</Text>
           <Text style={{color:"blue",}}> Forget password ?</Text>

          </View>



       <TouchableOpacity onPress={handleSubmit}
        style={{
              
              flexDirection: "row",
              alignItems: "center",
              justifyContent:'center',
              backgroundColor:"black",
              marginVertical: 10,
              width: 300,
              height:60,
              borderRadius: 5,
              marginTop:30
            }}>

           <Text style={{fontSize:18, color:"white"}}> Login</Text>
          
          </TouchableOpacity>  


       </View>


       <TouchableOpacity  style={{flexDirection: "row",
              alignItems: "center"}}
              onPress={()=>navigation.navigate("registerScreen")}>
        <Text style={{fontSize:15 , color:"black",fontWeight:"600", paddingLeft:20}}>
         Don't have a Account ? Regester here </Text>
        

       </TouchableOpacity>

     

        
      </KeyboardAvoidingView>




    </SafeAreaView>
     
  )
}

export default LoginScreen;