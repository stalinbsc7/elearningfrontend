import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View,Image } from "react-native";
import ListingDetailsScreen from "./ListingDetailsScreen";

const supportedURL = "https://360.articulate.com/review/content/54ab6bc8-f36f-49ab-a92a-9be9546b8f60/review";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
  
};

const PlayScreenStory = () => {
  return (
    
    <View style={styles.container}>
         
    
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/elearning.png')}></Image>
      <OpenURLButton url={supportedURL}>click to begin</OpenURLButton>
      {/* <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default PlayScreenStory;