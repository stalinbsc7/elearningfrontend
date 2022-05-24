import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import ListingScreen from '../screens/ListingScreens'
import Login from '../screens/Login';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import PlayScreenStory from '../screens/PlayScreenStory';
import Assessment from '../screens/Assessment';
const Stack = createStackNavigator();
const FeedNavigator=()=> (
    <Stack.Navigator screenOptions={{presentation:'modal'}} >
        <Stack.Screen name='ListingScreen' component={ListingScreen} options={{headerShown:false,gestureEnabled:true}}></Stack.Screen>
        <Stack.Screen name='PlayScreenStory' component={PlayScreenStory}></Stack.Screen>
        <Stack.Screen name='Assessment' component={Assessment}></Stack.Screen>
        <Stack.Screen name='ListingDetailsScreen' component={ListingDetailsScreen} options={{headerShown:false,gestureEnabled:true}}></Stack.Screen>
    </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {}
});

export default FeedNavigator;