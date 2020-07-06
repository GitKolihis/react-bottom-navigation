import React from "react";
import { View, StyleSheet, ScrollView, Text, ImageBackground, Dimensions } from "react-native";
import { Avatar, List } from "react-native-paper";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyProfileView}>
      <View style={{flex:1,minHeight:'70%', borderWidth:1, maxHeight:'70%'}}>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju Israel</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View><View style={{ flexDirection: "row" }}>
            <Ionicons name="ios-navigate" size={25} color="black" />
            <Text>Adelani Olanrewaju 6</Text>
          </View>
        </ScrollView></View>
      </View>
      <View style={{height:Dimensions.get('window').width*0.2, width:Dimensions.get('window').width*0.2, borderRadius:Dimensions.get('window').width*0.1, position:'absolute', top:50, left:Dimensions.get('window').width*0.4, overflow:'hidden'}}>
        <ImageBackground source={{uri:'https://colabnotes.com/Cloud.png'}} style={{width:'100%', height:'100%', justifyContent:'center', flex:1}} resizeMode="cover">

        </ImageBackground>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // paddingTop: 30,
    backgroundColor: "#EE5A0B",
    justifyContent:'flex-end'
  },
  bodyProfileView:{
    flex:1,
    marginTop:100,
    backgroundColor:'white',
    alignItems:'flex-start',
    justifyContent:'flex-end'
  }
  
});
