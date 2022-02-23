import React, { Component } from 'react';
 import { Text, View, StyleSheet, Image } from 'react-native'; 

 const logo = require('../assets/logo.png');

 let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
 export default class History extends Component {
    constructor() {
       super();
        this.state = {
           weather: '', 
           fonts_loaded:false
           }; 
           }
        
   getWeather = async () => { 
    //change latitude and longitude 
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=23&lon=76';
   return fetch(url)
    .then(response => response.json()) 
    .then(responseJson => {
       this.setState({
          weather: responseJson,
     }); 
  })
   .catch(error => {
      console.error(error);
    });
    };                        

  componentDidMount = () => {
   this.getWeather(); 
   }; 
   
   render() {
      if (this.state.weather === ''){
        return ( <View style={styles.container}>
         <Text>Loading...</Text> 
         </View> 
         );
         } else {
            return (
        <View style={styles.container}> 
      <View style={styles.subContainer}> 
         <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>
       Groudler 
       </Text> 
       <Image 
       style={styles.cloudImage}
       source={require('../assets/clouds.png')} /> 
       <View style={styles.textContainer}> 
       <Text style={{ fontSize: 18}}> 
       {this.state.weather.main.temp}°C 
       </Text> 
       <Text style={{ fontSize: 20, margin:10}}>
        humidity : {this.state.weather.main.humidity} 
        </Text>
         <Text style={{fontSize: 20}}> 
         {this.state.weather.weather[0].description} 
         </Text>
          </View> 
          </View> 
        </View> 
      ); 
    } 
  } 
} 
          
 const styles = StyleSheet.create({
  container: {
    flex:1 ,
    backgroundColor:"#D3D3D3"
    },
  subContainer : {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center' 
    }, 
  title:{ 
  marginEnd:190,
  marginTop:-60,
  justifyContent:"centre",
  fontSize: 30,
  fontWeight: '550' ,
    },
  cloudImage :{
    width: 200,
    height: 200,
    marginTop: 30 
    },
  textContainer : {
    flex: 1, 
    alignItems: 'center',
    flexDirection:'row',
    marginTop:-150 
    },
     logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop: 30,
    marginRight:280
  },
   iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
   });

