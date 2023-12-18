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
    Alert,
  } from 'react-native';
  import { useState, useEffect } from 'react';
  import {useNavigation} from '@react-navigation/native';
  import axios from "axios";
  import { SafeAreaView } from 'react-native-safe-area-context';


const RegisterScreen = () => {
   const [name  , setName]= useState();
   const [email , setEmail]=useState();
   const [password , setPassword]=useState();

   const navigation= useNavigation();

   const handleSubmit=()=>{
    
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred during registration"
        );
        console.log("error", error);
      });
   };

 return (
    <>
    <SafeAreaView style={{flex:1 ,backgroundColor:"white", alignItems:"center"}}>
   <View style={{marginTop:50}}>
   <Image
   style={{width:150 ,height:100 ,resizeMode:"contain"}}
   source={{
    uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
   }}
   />
   </View>


   <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 25, color: "black" }}>
            Register Your Account
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
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginVertical: 5,
                width: 300,
                height:40,
                fontSize: email ? 16 : 16,
                paddingLeft:20
              }}
              placeholder="Enter your Name"
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
              value={email}
              onChangeText={(email) => setEmail(email)}
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
              onChangeText={(password) => setPassword(password)}
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

           <Text style={{fontSize:18, color:"white"}}> Register</Text>
          
          </TouchableOpacity>  


       </View>


       <TouchableOpacity  style={{flexDirection: "row",
              alignItems: "center"}}
              onPress={()=>navigation.navigate("loginScreen")}>
        <Text style={{fontSize:15 , color:"black",fontWeight:"600", paddingLeft:20}}>
         Allready have a account ? SignIn </Text>
        

       </TouchableOpacity>

     

        
      </KeyboardAvoidingView>




    </SafeAreaView>
    </>
  )
}

export default RegisterScreen