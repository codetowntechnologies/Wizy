/* eslint-disable prettier/prettier */
import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  navigation,
} from 'react-native'
import resp from 'rn-responsive-font'
console.disableYellowBox = true

class OtpActivity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phone_number: '',
      password: '',
    }
  }
  PhoneNumberPickerChanged (country, callingCode, phoneNumber) {
    this.setState({
      countryName: country.name,
      callingCode: callingCode,
      phoneNo: phoneNumber,
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginButtonStyle1}
          activeOpacity={0.2}
          //onPress={this.CheckTextInput}
        >
          <Text style={styles.buttonWhiteTextStyle1}>Verify OTP </Text>
        </TouchableOpacity>
        <View style={styles.inputView}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={styles.name1}> IND</Text>
          </View>

          <TextInput
            placeholder='Phone'
            placeholderTextColor='#000'
            underlineColorAndroid='transparent'
            style={styles.input}
          />
        </View>
        <View style={styles.inputView1}>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <Text style={styles.name1}> OTP</Text>
          </View>

          <TextInput
            placeholder=''
            placeholderTextColor='#000'
            underlineColorAndroid='transparent'
            style={styles.input}
            onChangeText={email => this.setState({email})}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButtonStyle}
          activeOpacity={0.2}
          onPress={() => {
            this.props.navigation.navigate('WelcomeActivity')
          }}>
          <Text style={styles.buttonWhiteTextStyle}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  buttonWhiteCircleTextStyle: {
    textAlign: 'center',
    fontSize: resp(30),
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
  },

  buttonWhiteTextStyle1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: resp(20),
    color: 'white',
    alignContent: 'center',
  },
  name1: {
    fontWeight: 'bold',
    marginLeft: resp(10),
    fontSize: resp(15),
    color: '#333',
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginTop: 50,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    elevation: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  ImageIconStyle: {
    height: 25,
    width: 25,
    marginLeft: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowIconStyle: {
    height: 15,
    width: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    color: 'black',
    width: 300,
    height: 50,
    padding: 10,
    textAlign: 'left',
  },
  CircleFlexDirection: {
    marginRight: 10,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
  },

  inputView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    elevation: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  loginButtonStyle: {
    marginTop: 50,
    width: 320,
    height: 50,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  CircleButton: {
    marginLeft: 30,
    width: 80,
    height: 80,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },

  loginButtonStyle1: {
    marginTop: 5,
    width: 320,
    height: 50,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  CircleImageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'red',
  },
})

export default OtpActivity
