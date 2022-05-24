import React, {useContext, useState}  from 'react';
import { Button,ImageBackground, Image, StyleSheet, View , Text} from 'react-native';
import { moduleName } from 'react-native';
import Screen from '../components/Screen';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppError from '../components/AppError';
import userApi from '../Api/user';
import AuthContext from '../auth/context';
import jwtDecode from 'jwt-decode';

import authApi from '../Api/auth';
// import user from '../Api/user';

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password')
  });

const Register = () => {
  const authContext=useContext(AuthContext);
  const[error,setError]=useState();
async function handleSubmit(userInfo){
   console.log(userInfo)
  const result=await userApi.register(userInfo)


if(!result.ok){
  console.log(result);
  if(result.data) setError(result.data.error)//server processed our request


else{
  //console.log('success')
  setError("An UnExpected error occured");
  console.log(result);
}
setTimeout(()=>{
  setError('')
},3000);
return;
}


const reg=await authApi.login(userInfo.email,userInfo.password)

if(reg.ok) {
  
  console.log(reg.data);
  authContext.setUser(userApi)
  authStorage.storeToken(reg.data)
}
else{
  console.log('error')
}

}


//   const user=jwtDecode()
// }
    // function authentication(values) {
    //     if (
    //       values.email === "abirami@gmail.com" &&
    //       values.password === "12345"
    //     ) {
    //       alert(`${values.email}  Login Successfully`);
    //       console.log(values.name);
    //       console.log(values.email);
    //       console.log(values.password);
    //     } 
        // else {
        //   alert("Enter valid email or password");
        //}
      // }
//    const [account, setaccount] = useState(name);
return (
  <Screen style={styles.container}>
         <ImageBackground style={styles.container1} source= {require('../../assets/backgrou.jpg')} blurRadius={2}>
     
          <Image  style={styles.image} resizeMode='contain' source= {require('../../assets/downloadd.png')}></Image>
         
        
          
         
          <Formik 
    initialValues={{name:'',email:'', password:''}}
      //onSubmit={authentication(values)}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
        <>
                  <AppTextInput
                        icon ='account' 
                        placeholder='Name'
                        onChangeText={handleChange('name')}
                        onBlur={()=>setFieldTouched('name')}
                     // onChangeText={(text)=>setemail(text)}
                   />
                       
                         {touched.name && <AppError errors={errors.name} />}
                         <AppTextInput
                         icon ='email' 
                         placeholder='Email'
                         onChangeText={handleChange('email')}
                         onBlur={()=>setFieldTouched('email')}
                      // onChangeText={(text)=>setemail(text)}
                    />
                        
                          {touched.email && <AppError errors={errors.email} />}
                  
                  <AppTextInput
                       icon ='lock' 
                       placeholder='Password'
                       secureTextEntry={true}
                       keyboard='numeric'
                       onChangeText={handleChange('password')}
                       onBlur={()=>setFieldTouched('password')}
                    // onChangeText={(text)=>setpassword(text)}
                   />
                          
                          {touched.password && <AppError errors={errors.password} />}
  
                  <AppButton title="Sign Up" 
                    //  myPress={handleSubmit}
                    myPress={handleSubmit}
                    //  onPress={()=>console.log("working")} 
                   />
                    <Text style={{fontSize:10,color:"red",fontWeight:'700'}}>if you don't have a account please sign up! (or) you have a account please login!</Text>
        </>
      )} 
     </Formik></ImageBackground>
          </Screen>
      );
  }
  
  export default Register;
  const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      //marginTop:30,
     // padding:15
     
    },
    container1:{
      justifyContent:'center',
      alignItems:'center',
     // marginTop:50,
      padding:40,
      height:900,
      width:400
  },
  image:{
    
    height:130,
    width:130,
    justifyContent:'center',
    marginBottom:30
  }
    })