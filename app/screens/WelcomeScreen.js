import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform, Button, Alert} from 'react-native'
import AppButton from '../components/AppButton'


const WelcomeScreen = ({navigation}) =>{

    var login=() => {
       
        console.log("Login btn clicked")
        Alert.alert('alert','login yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
    var register=() => {
     
        console.log("Register btn clicked")
        Alert.alert('alert','register yes or no',
        [
          {text:'YES',onPress:()=>console.log('yes')},
          {text:'NO',onPress:()=>console.log('no')}
        ]
        )
    } 
      
return(
    
    <ImageBackground style={styles.container} source= {require('../../assets/backgroun.jpg')} blurRadius={2}>
      
    <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/elearning.png')}></Image>
    <Text style={{fontSize:30,color:"#1598b8",fontWeight:'700'}}>WELCOME TO eLEARNING SYSTEM</Text> 
    </View>
    
    <AppButton title="Sign In" color="primary" myPress={()=>navigation.navigate('LoginScreen')}style={{backgroundColor:'#1598b8'}}/>
    <AppButton title="Sign Up" color="secondary" myPress={()=>navigation.navigate('RegisterScreen')} style={{backgroundColor:'#1598b8'}}/>
    <Text style={{fontSize:10,color:"red",fontWeight:'700'}}>if you don't have a account please sign up!</Text>
    
    </ImageBackground>
 







)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-end',
        padding: Platform.OS==='android'?25:0
    },
    image:{
        height:100,
        width:100,  
    },
    imageContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    }
  
    
 
});
