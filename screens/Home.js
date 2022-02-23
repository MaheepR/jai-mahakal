import React, { Component } from "react";
import { View, Text, StyleSheet ,Image } from "react-native";

const logo = require('../assets/logo.png');
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false,
            playerId:"",
            timeId:"",
            playerName:"",
            timeName:""
        }
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }

    

 
  
    
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
        <View style={styles.upperContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Groduler</Text>
          <Text style={styles.subtitle}>A Scheduler Place</Text>
        </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3"
  },
  text: {
    color: "#4C5D70",
    fontSize: 30
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 80,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Bubblegum-Sans',
    paddingTop: 20,
    color: '#4C5D70',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Bubblegum-Sans',
    color: '#4C5D70',
  },
});
