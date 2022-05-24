import React,{useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem1';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const Messages = [
    // {
    //     id: 1,
    //     title: "Ajitha",
    //     description: "MCA",
    //     image: require("../../assets/icon.jpg"),
    // },
    // {
    //     id: 2,
    //     title: "Melfiya",
    //     description: "MCA",
    //     image: require("../../assets/icon.jpg"),
    // },
    // {
    //     id: 3,
    //     title: "Atchu",
    //     description: "Bsc",
    //     image: require("../../assets/icon.jpg"),
    // },
    // {
    //     id: 4,
    //     title: "Sathya",
    //     description: "Msc",
    //     image: require("../../assets/icon.jpg"),
    // },
    // {
    //     id: 5,
    //     title: "Banu",
    //     description: "MCA",
    //     image: require("../../assets/icon.jpg"),
    // },
    // {
    //     id: 6,
    //     title: "Prabha",
    //     description: "BCA",
    //     image: require("../../assets/icon.jpg"),
    // },
    {
        id: 7,
        title: "STALIN",
        description: "MCA",
        image: require("../../assets/icon.jpg"),
    },
    
    
];


const MessageScreen = ()=>{

     const [messages, setmessage] = useState(Messages);
     //const click = (item)
    //  console.log('im pressed', item) 
    function click(item){
        //console.log('im pressed', item)
    }
    const [refreshing, setrefreshing] = useState(false);
   
    const deleteItem=(item)=>{
        setmessage(messages.filter((itm)=>itm.id !==item.id))
    }
return(
  <FlatList data={messages}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=>(
                <ListItem 
                title={item.title} 
                subtitle={item.description} 
                image={item.image}
                myPress={()=>click(item)}
                renderLeftActions={()=>(<ListItemDeleteAction onPress={()=>deleteItem(item)}></ListItemDeleteAction>)}
    />)}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={()=>setmessage(Messages)}
   />
   
    )}


 export default MessageScreen;