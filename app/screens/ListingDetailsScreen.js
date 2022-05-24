import React from 'react';
import {url1, StyleSheet, Text, SafeAreaView,Platform,StatusBar,Linking, View,Button,Image} from 'react-native';
import AppButton from '../components/AppButton';
// import VideoPlayer from 'react-native-video-player';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import { useNavigation } from '@react-navigation/native';
import Screen from '../components/Screen';

function ListingDetailsScreen({navigation,route}){
    const listing=route.params
    //const url1="https://www.youtube.com/"
    return(
        
        <View>
         <Image style={styles.image} source={{uri:listing.images[0].url}} />
          <View style={styles.container}>
             <Text style={styles.title}>{listing.title}</Text>
             <Text style={styles.price}>{listing.price}</Text>
              <View styles={styles.user}>
               <ListItem 
               image={require("../../assets/icon.jpg")}
               title="stalin"
               subtitle="10 Listings"></ListItem>
              
              </View>

          </View>
         
                   <AppButton title="start Course" 
                  //  myPress={handleSubmit}
                 // myPress={}
                 myPress={()=>navigation.navigate("PlayScreenStory")} 
                // onPress={()=>console.log("working")} 
                 
                 />
                  <AppButton title="start Assessment" 
                  //  myPress={handleSubmit}
                 // myPress={}
               
                 myPress={()=>navigation.navigate("Assessment")}
                 />
  
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:100,
        marginBottom:20,
        overflow:"hidden"
    },
    container:{
        flex:1,
        padding:20,
        backgroundColor:"white"
    },
    image:{
        width:"100%",
        height:300,
        borderTopRightRadius:100,
        borderTopLeftRadius:100
    },
    subtitle:{
      
        fontWeight:'bold'
    },
    title:{
        marginBottom:7,
        color:"black"
    },
    price:{
        color:"#4ECDC4"
    }
})

export default ListingDetailsScreen;