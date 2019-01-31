import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ActionBar from 'react-native-action-bar';
import {createStackNavigator, createAppContainer}  from 'react-navigation';
import Swipeout from 'react-native-swipeout';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  ListView,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';

var swipeoutBtns = [
  {
    text: 'Delete'
  }
]

class HomeScreen extends React.Component {
    constructor(props) {
    super(props);
    state = {
      username   : '',
      password: '',
    }
  }
 static navigationOptions =
         {
     
            title: 'Welcome',
            headerTitleStyle:{
                textAlign: 'center',
                alignSelf: 'center',
            },
             headerStyle:{
                 backgroundColor: '#00b5ec',
                
             },
            headerTintColor: '#fff',
            
         };
render() {
       const {navigate} = this.props.navigation;
       return (
        <View style={styles.container}>  
            <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://www.freeiconspng.com/uploads/profile-icon-1.png'}}/>
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
    );
  }
}

class MyList extends React.Component {
    static navigationOptions =
         {
             title: 'List View',
             headerStyle:{
                 backgroundColor: '#00b5ec',
             },
           headerTintColor: '#fff',
           titleStyle: {
               color: '#fff',
               textAlign: 'center'
           }
         };
    
    constructor (props) { 

    super (props); 

    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 }); 

    this.state = { 
      dataSource: ds.cloneWithRows(['Example1', 'Example 2', 'Example 3','Example 4','Example 5','Example 6','Example 7','Example 8','Example 9','Example 10','Example 11','Example 12','Example 13',]) 
    }; 
  } 
    
  render() {
       
    return (
         <ListView
        dataSource={this.state.dataSource}
        renderRow={data => (
          <View style={styles.container}>
           <Swipeout  right={swipeoutBtns} > 
           <Text style={styles.examples}>  {data} </Text> 
           </Swipeout>
        
          </View>
    )}

      />   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  examples: {
  color: 'black',
  fontSize: 40,
    
  },
  red: {
    backgroundColor: '#FF0000',
  },
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
 
