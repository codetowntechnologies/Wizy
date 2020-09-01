import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

class Model extends Component {
  // initial state
  state = {
    isVisible: false
  };

  // hide show modal
  displayModal(show){
    this.setState({isVisible: show})
  }

  render() {
    return (
      <View style = { styles.container }>
       <TouchableOpacity 
              onPress={() => this.props.navigation.goBack()}>


                  
                     
                      <Image source={require('../images/close.png')}
                         style={styles.closeIcon}>
                      </Image>

                     </TouchableOpacity> 
      <View style = { styles.container2 }>
       
     
                    
          <Text style = { styles.MenuText }>Menu</Text>
          <TouchableOpacity 
            onPress={() => { this.props.navigation.navigate('WelcomeActivity') }}>

              <Text style = { styles.text }>Home</Text>
              </TouchableOpacity>

               <TouchableOpacity 
                  onPress={() => { this.props.navigation.navigate('ServiceActivity') }}>

                  <Text style = { styles.text }>Services</Text>
              </TouchableOpacity>

               <TouchableOpacity 
                  onPress={() => { this.props.navigation.navigate('ProfileActivity') }}>

                <Text style = { styles.text }>Profile</Text>
              </TouchableOpacity>  
              
              <TouchableOpacity 
                  onPress={() => { this.props.navigation.navigate('HistoryActivity') }}>

                <Text style = { styles.text }>History</Text>
              </TouchableOpacity>  
              
              
                  
              
        
          </View>        
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#000',
    flex: 1,
    alignItems: 'center',
    
  },
  container2: {
  
    backgroundColor:'#000',
  flex: 1,
  alignItems: 'center',
  
},
closeIcon:{
  marginTop:80,
  width:40,
  height:40,
  marginTop:10,
  marginLeft:280,
},
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  ViewAll : {
    marginTop:10,
    marginLeft:210,
  fontSize:20,
  color: '#fff'
},
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  MenuText: {
    color:'red',
    fontSize: 40,
    marginBottom: 10,
    padding: 40,
  },
  text: {
    color:'white',
    fontSize: 30,
    margin:5
  },
  closeText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
  }
});
export default Model;