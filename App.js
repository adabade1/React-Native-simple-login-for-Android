//import {createStackNavigator, createAppNavigator} from 'react-navigation';
//
//const MainNavigator = createStackNavigator({
//  Home: {screen: homescreen},
////  Profile: {screen: ProfileScreen},
//});
//
//const linkmy = createAppNavigator(MainNavigator);
//export default linkmy;
//class homescreen extends React.Component {
//  static navigationOptions = {
//    title: 'Welcome',
//  };
//  render() {
////    const {navigate} = this.props.navigation;
//    return (
//      <Button
//        title="Go to Jane's profile"
////        onPress={() => navigate('Profile', {name: 'Jane'})}
//      />
//    );
//  }
//}


//import React, { Component } from 'react';
// 
//import { StyleSheet, View, Text } from 'react-native';
//
//import { StackNavigator } from 'react-navigation';
// 
//class MainActivity extends Component {
// 
//static navigationOptions =
//   {
//      title: 'MainActivity',
//
//      headerStyle: {
//
//      backgroundColor: '#00BCD4'
//
//    }
//
//   };
// 
//   render()
//   {
//      return(
//
//         <View style = { styles.MainContainer }>
// 
//            <Text style={{fontSize: 20}}> Hello Guys </Text>
//          
//         </View>
//      );
//   }
//}
// 
//export default ActivityProject = StackNavigator(
//{
//  
//  First: { screen: MainActivity }
//
//});
//
//const styles = StyleSheet.create({
// 
//  MainContainer :
//  {
//      flex:1,
//      padding: 10,
//      justifyContent: 'center',
//      alignItems: 'center',
//      backgroundColor: '#fff'
//  }
//
//});


//
//import React from "react";
//import { View, Text } from "react-native";
//import { createStackNavigator, createAppContainer } from "react-navigation";
//
//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
//}
//
//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen
//  }
//});
//
//export default createAppContainer(AppNavigator);





import React from 'react';
//import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ActionBar from 'react-native-action-bar';
import {createStackNavigator, createAppContainer}  from 'react-navigation';
//import Form from './Form.js';
//import SignIn from './signin.js'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

//const MainNavigator = createStackNavigator({
//  Home: {screen: App},
//  MyList: {screen: ListScreen},
//});
//
//const link = createAppNavigator(MainNavigator);
//
//export default link;

class HomeScreen extends React.Component {
    constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }
//     onClickListener = (viewId) => {
//    Alert.alert("Alert", "Button pressed "+viewId);
//    navigate('Profile', {name: 'Jane'})}
//  }
     static navigationOptions =
         {
         title: 'Welcome',
         headerStyle:{
         backgroundColor: '#00b5ec'
         },
         
     };
  render() {
       const {navigate} = this.props.navigation;
    return (
//        <View style={styles.container}>
//        <Text>Good hellaaaaaa!</Text>
//      </View>
//         <View style={styles.screen}>
//         <ActionBar
//          title={'Welcome'}
//          containerStyle={styles.bar}
//          backgroundColor="#000000"/>
        <View style={styles.container}>
       
        <Text style={styles.text}>Welcomehere</Text>
          
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8ALVYAEEn8/f8AK1UAG0wAAEMAKFMAJlIAI1AAIU8AAESlrLcAHU0AAEEAH04AGEsAE0kACEXCydLq7O98iJra3uNKXnrS1twADEcAGEq7wcnKz9aQmqnu8PJue5AbOl8mQWRhcIezusUvSGmao7FTZH6Ik6OWn63i5up5hpjX3OI8UnGMl6hbbIVDV3MQNFt3T5OEAAALxUlEQVR4nO2daXPqOgyGS+I4++JAWEohQFgKbYH//+su0NMFiBPLcpbe4Zm5M/fDacybOLYkS8rT04MHDx48ePDgwYMHn0zfupk32ezSxYU0mayy8XCrN/27FDB98ZL1kcYaiww/dGzbsizbtp3Qf45YTNl7+jreNv0jZZl2J2ubMsOxSIeLafvRSHtPsr8mUx8nc8r8Im2/IKYTxeHC+zMq+6v3gDmmkLhfMm0jNnfdpn98OW+bY+xD1X2rdJi2GLd5/em9zuJQbGZysZmWvjQthMP4EPhIef9EaubrtGk1d0wnDrNUyLtAfLofNi3pim1KsbPzFjtejpuW9c3bmtpq5V0wWcdrWtqF/tpVNz2vIZGVNS3vqbenVen71Hhsdq7qSVDF/LzSqC0bXHM8Flas74xJFw3tHf0lq0HfGSduZMlJAlnjTIJo2a9b37Dj16evc56qH/UKTKjiDb6caF6jd7WdGXXrO2EGtb2NHq3xDfyNtq7Hs1qMap+hXzhmDQtOb1bHHsiDVD9TX7SGZugX8a5agV7Q2Az94vlQpcBd3LS+E86xOiNuX5eZVozlV7UzHprYBfMgcSXuhr50mlb2DQkqCMfp86o9QRCBcsdYn7VK4OkpKpbYsifYOUtUewKwbJvAk0Sq8l084C014hgspnQ0cmnMnsEHN3kE6ozUPXabMA16TL2X3sU10HvDLJnTZ3SMjmg9RQKTCPdLHLq8PxucZgOKnRlmR4035QWon2EHKWc29TYj5FGOvVQh8AUl0KRpgRWpf8S4Jcxf4AX2NMxtLo2RTdc4Y15boRXOEAsCCV7LB8hGqCUHbb8tEEFDK3wTGWI6x6w4hOF8KQ8xh+y56NgDzG5kvWMEbhFhUcg6t8DsR9EGoXAmb3rAFvIF5ikG8t5iIj8udDN+R+waxJQVOKTyo1JgoEEniE0pTCUVduQHjcGn033E7exQOU8KMUcdCVNjglhtiCUjEHNTmYxFjFjWOqFMnHgpP2AkFXpHGcAU7it68rFRcpQReNr4EeabCfYy9Eh+mYkkk2Awa3dHgw6aIOzRSE7gaVNEvInEgY3VQ9zOUNqKyjDGmzEBjbVAmBixdIBIx0zTTgxxMjA7BZnJCsTd2E6YAEZaI1Y1+Ul6mqbPCIUdKv4QURZUhIhFb1EhDUd8299jJouL8blRgVkiPPQW8wihq/Y1A1QsXPgFSTEHhbigQoI7oxS0h6cuJn5oy/pqF1a4bDlDzCB+Rb0MmKX0ZA3jTkhIR2gUGxVp92GmxQ247eJknYos5GNcwgVSIfIQyFoLDILZ7fEKkc+wQ8sP3KYo27Dh9/B0g8vPEVbIMWzUaRByLRXyvufI82cTtR/u0Dk7pclEKJP0TJM2zZlSD2OCTlBvzi69UHqHZ+jsStaYb/HJqHiabl30CM35h0Ljo1dr+Vjimb2CKrGSGAMmZPkFIk6Dn0En3KJDISVDIGJtCiZpiYPRVZIELB0vRRwk/KLQ5tgoSZJ9lqwYGCrKIi+6w2puoqCXdoeKReDMiL8Q6Lj8rm8aOHv6TcGL+KIqF7/288MrCgIpWL/iZ4w9XCDmDPiagrcEFVS/An6O/4Y1+X/BD35j8iFuiKG5GKbCciPGy3XDHf1cY5L68mnu4C41Q5VFP9YcInCvtKrY4S01aoym72EAJ+voRPJruHGGjdraSXtWS25iHjyrZqG4w4VpCKXU9WbKC6p4cQZsEOoOQgWCp9lIfVWqxrm1FVQXCuR5j9SP2onyi6KmSvzPG8ygMFd/U03vF852sa3ibp7WVDflpHv3NlpFdeEcJ1yZ3X2LHc9X9zUz3oFWVrLJsb3HykzfO0wjNlPvZftV9+TtZtSosOydcwSlIM5WALENNqIsilgcM8Optuidk8enzHcqgHQQiceQYXIVok0aYjqhcUuZwelc//OwsBmoMGGuwgSl8NzV8X33sfJuWBW/3X5y/c8nydoKIqyjQViuQszJFgldXj/HQ9GKkltI0MsWboRbh0a5vlsqf+es4IPrDmZFmxAvZqVnc5QxFytWGB2KTs8LqihJ/vty4QXTSszNVSgdpaHFYfwP/mLzXFg9mGnS9zxfoewzpCXR0Sk3DkqM4r/UB7JGiFKFZQILJkfxIzyzkQwd0VyFcmupQG0cLzdA5Mjfk5OYv5ZK5QXag/JfyTuQEAr+S0nk7IcyNg0xRIKG+YdKgofFUt0A8l/wV4mInmAdx3veQ9QEu5Pk/nExnIpECd9CND3oJechCtfx9OD5riQ/WCuRF+gKFWs/5VbDUOHa1oINlYOZvzrAfXxLZJm5cF/SBMh/08E/jHPxvga90Ei82v82p1M8r/5JYg108lO/ptBjdHMm/iNv8/+fIWmofegv8zmmBPQ6BqQnxe7qOQDTiqCBAV594BF4HYF83B+uXyZgBySoMcI7QATmPwPLNn8XpUIroaHLfMy598A7FQI7+/6ksohZQr94Ay6CMec6wC0fmmb5s9hQaK814CLI2fDBGyJvKnD5yrYIwangOuzAgbvX9mB3Kt9DKWJ5edGJBf5DHTZL+RURsDulgX/o5y0UN9dkFTLuWwBLLIMrfBqfXkUmUXICVMhPdYFZRxIKT86eI2zLyivUuBeCnT7JKHwaSDWRgyksKH6CVQRJKdSlGuTCFBZVBoHsPymFcsAUcpO+noD1sa1VmB/S/wRk/7VVoVXU8BvUDqOtCsPCAj1I0lBbFRaXBUF2xLYq9AsvNQRcqqUKy8rlAUtNSxXyjdJPAPtFSxW6JdcC+IjtVFgehxXv7NtOhWWTFBKsaanC0ou9CTv6rVQo0oVHuDinlQpFvnwhHHFro0JTpAZCuK6kjQrFGtSIboktVEjyczBu6Qvme7dQIedU7Y7CXLtWKxTt7dsVu177FFrCZY9iXmL7FAqnFQg2UmqdwsLwxQ1Cu37rFLqA44KxyBXbphDyCMXexLYppMJv4RmR2viWKYTWjwscQxUFXhUjckIKyps4sS1/iOAzYHl65Qp9SAfaC7vSuOJzfV92L0+bJPCGKrpRFs4gir62VE633CsHt/N+OmfKl13VNCag5UsOvbsvFyjXJe5Qvtj4I20/Gb9V9Cynb9lkcaSRwNk79HMan/SEPjJjhZFGw+Vi443/1Rei6Q3H3ma/NAIt8sVajUaS7ShX4rFT0w6NiMWUzd4XycTLXobbKUSuPt0Ou9nqI93PbTfWIiO0AGdEQrGLXGQyrC3b8U9itVFAz3oHi3SXTFYrzxuf6P7j/P+et1pNkl26PiwdlwYjjUV+aFsyHUDk5uiZKbb2mZimZduh7xuGEUURi9gXUWQYvu87jm1JifoNQ3yZLGvDF47LgFnct6RKe45UAolwnyVT1rypMrCfI8V86KIWGDDL9Z6xqh5j1eCINH8uYdOOz43nYyIabf6gtsORUghT48G18HPH/5BIVc1FJy1dUANlHmqP1dHqAUyM/8rqN9u4hRI1VPf3W1Cf06oGJvMxuUKJLXuKEepLIX9AIlMusGUSNcVT9JM+a82mEStdZH7YWpW0HoNDFW4T10zV9/+TgKjb6HOQbsWhDpPXMlARu6Y3Rke4o6YsXrNLKlPgD5bRt5tzNUiA+hKRKPqgKZ/YNpAxGWFWtJGdkR2qfgV/6B9r6M93gxlUtgvmktT9GKO5dOhekmGtj9Gi5d/iUs9HUJcRR7RD3Q/wk96gHtffD+vLGLile6zeirNLGt5VjceqfR0tuqgvqSUffTKqLmJs0bX0p5UUon+MSjNTpLDpoFo3Qhz91UD2G80hDBZteH7fZPNYpUFuRlrS9Pt3x3Dhqmpg7QRLr760QABTb+6Kl77xsBlLaki1kmU7mcW+/JM8t1tOEd9PrIf+69KNZL6abBmxtWu9vE+mWWoHkSP+LIllaHSwatXaWco2281d7Tksa0Bu2gZzzf2qLTsfDH2YJQMr0Jjh36Q+EdM6Z8JpQbRMV936XPdq0Ptdb7JbHOZ2TCl1T/9R4/i+TjfeePjXteWht3Kje/DgwYMHD/7n/AdUBOv28QOZ5AAAAABJRU5ErkJggg=='}}/>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
            
        </View>
     <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
 <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => navigate('MyLink')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        </View>
//</View>
        
    );
  }
}

class MyList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

//export default AwesomeProject = StackNavigator(
//{
//  
//  First: { screen: App }
// 
//});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
//    screen: {                        
//    flex: 1,
//    padding: 10,
//    alignItems: 'center',
//    },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
 text: {
      fontSize:30,
    color:'white',
    paddingLeft:30,
    paddingRight:30,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
 },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  MyLink: {
    screen: MyList
}
});

export default createAppContainer(AppNavigator);
 

//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//
//export default class App extends React.Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text>Open up App.js to start working on your app!</Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
