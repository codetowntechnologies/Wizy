import React, {Component} from 'react'
import BookingIcon from 'react-native-vector-icons/FontAwesome'
import resp from 'rn-responsive-font'
console.disableYellowBox = true

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {ScrollView} from 'react-native-gesture-handler'

export const bookIcon = (
  <BookingIcon name='pencil-square-o' size={40} color='black' />
)
export const calendarIcon = (
  <calendarIcon name='calendar' size={40} color='black' />
)

function Item ({item}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.title}>{item.key}</Text>
      <Image
        source={{uri: item.photo}}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
    </View>
  )
}

class ElecticianActivity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,

      data: [
        {
          key: 'You Have a ride arriving',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          key: 'You Have a ride arriving',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          key: 'You Have a ride arriving',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          key: 'You Have a ride arriving',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
          key: 'You Have a ride arriving',
          photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        },
      ],
    }
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible})
  }

  render () {
    const titleName =  this.props.navigation.getParam("titleName",Item.service)
    const {modalVisible} = this.state
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.container3}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Model')
              }}>
              <Image
                source={require('../images/menu.png')}
                style={styles.MenuHomeIconStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.screentitle}>{titleName}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container5}></View>
        </View>


        <View style={styles.container}>
          <View style={styles.headerView1}>
            <TouchableOpacity>
              <Text style={styles.ServiceTitle}>
                9 Electricians found in your area
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerView1}>
            <TouchableOpacity>
              <Text style={styles.ServiceTitle}>Book Now</Text>
            </TouchableOpacity>

            <Modal
              animationType='fade'
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.')
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Your Booking is Successful
                  </Text>
                  <TouchableHighlight
                    style={{...styles.openButton, backgroundColor: '#000'}}
                    onPress={() => {
                      this.setModalVisible(!modalVisible)
                      this.props.navigation.navigate('WelcomeActivity')
                    }}>
                    <Text style={styles.textStyle}>Thanks</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

        
          </View>

        
          
            <View style={styles.inputView}>
              {/* <Image source={require('../images/phone_no.png')}
                                style={styles.ImageIconStyle} /> */}

              <View >
                <Image
                  source={require('../Component/images/name.png')}
                  style={styles.MailIconStyle}
                />
              </View>

              <TextInput
                placeholder='Name'
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
              />
            </View>
            <View style={styles.inputView1}>
              <Image
                source={require('../Component/images/email.png')}
                style={styles.MailIconStyle}
              />

              <TextInput
                placeholder='Address'
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
                onChangeText={email => this.setState({email})}
              />
            </View>

            <View style={styles.inputView1}>
              <Image
                source={require('../Component/images/password.png')}
                style={styles.MailIconStyle}
              />

              <TextInput
                placeholder='Little Description for Work'
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={styles.inputView1}>
              <Image
                source={require('../images/location.png')}
                style={styles.MailIconStyle}
              />

              <TextInput
                placeholder='Loction'
                placeholderTextColor='#000'
                underlineColorAndroid='transparent'
                style={styles.input}
                onChangeText={email => this.setState({email})}
              />
            </View>

            <TouchableOpacity
              style={styles.BookButtonStyle}
              activeOpacity={0.2}
              onPress={() => {
                this.setModalVisible(true)
              }}>
              <Text style={styles.buttonWhiteTextStyle}>Book Now</Text>
            </TouchableOpacity>

            <View style={styles.BottomViewText}>
              <TouchableOpacity>
                <Text style={styles.ServiceTitle}>
                  Next Availability at 9PM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
     

        <View style={styles.tabStyle}>
          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('Dashboard')
            }}>
            <Image
              source={require('../images/home_active.png')}
              style={styles.StyleHomeTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('OderFoodActivity')
            }}>
            <Image
              source={require('../images/food.png')}
              style={styles.StyleVideoTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('RidingActivity')
            }}>
            <Image
              source={require('../images/bus.png')}
              style={styles.styleNotificationTab}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('HistoryActivity')
            }}>
            <Image
              source={require('../images/history.png')}
              style={styles.StyleProfileTab}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },
  container1: {
    flex: 0.5,
    marginTop: 10,
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  MailIconStyle: {
    marginLeft:RFValue(20,580),
    width: RFValue(40,580),
    height: RFValue(40,580),
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container2: {
    flex: 0.5,
    backgroundColor: 'white',
  },
  container3: {
    flex: 0.2,
    marginLeft: 10,
    backgroundColor: 'black',
  },
  container4: {
    flex: 0.6,
    backgroundColor: 'black',
  },
  container5: {
    flex: 0.2,
    backgroundColor: 'black',
  },

  input: {
    color: 'black',
    width: 300,
    height: 50,
    padding: 10,
    textAlign: 'left',
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading_text: {
    fontSize: RFValue(10, 580),
    textAlign: 'center',
    color: '#FFC33B',
    fontWeight: 'bold',
  },
  listItem: {
    marginTop: 10,
    flex: 3,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  bottomactivetextstyle: {
    color: '#FB3954',
    fontSize: resp(8),
    marginTop: 5,
    textAlign: 'center',
  },
  item: {
    color: '#000',
    fontSize: resp(25),
    margin: 15,
    marginLeft: 30,
  },
  title: {
    color: '#000',
    fontSize: resp(25),
    margin: 15,
    marginLeft: 30,
  },
  buttonWhiteTextStyle: {
    textAlign: 'center',
    fontSize: resp(16),
    color: 'white',
    alignContent: 'center',
  },
  BookButtonStyle: {
    marginTop: resp(20),
    width: 320,
    height: 50,
    padding: 10,
    marginBottom: 80,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bottominactivetextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginTop: 3,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  StyleHomeTab: {
    marginTop: 5,
    width: 30,
    height: 28,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleVideoTab: {
    marginTop: 11,
    marginRight: 10,
    width: 38,
    height: 23,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    elevation: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  bottomvideotextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginRight: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  styleNotificationTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomnotificationtextstyle: {
    color: '#887F82',
    fontSize: 8,
    marginLeft: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  StyleProfileTab: {
    marginTop: 9,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyle: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 60,
    margin: 4,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    justifyContent: 'flex-end',
  },
  tabButtonStyle: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerView: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#000',
  },
  headerView1: {
    flexDirection: 'row',
    marginTop: resp(20),
    height: 50,
    backgroundColor: '#000',
  },
  BottomViewText: {
    flexDirection: 'row',
    marginBottom: 100,
    height: 50,
    backgroundColor: '#000',
  },
  screentitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: RFValue(20, 580),
    textAlign: 'center',
  },
  ServiceTitle: {
    color: 'white',
    margin: 15,
    fontSize: RFValue(15, 580),
    textAlign: 'center',
  },
  NextTitle: {
    color: 'white',
    marginBottom: 50,
    fontSize: 20,
    textAlign: 'center',
  },
  CircleShapeView: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginBottom: 50,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  plusiconstyle: {
    height: 30,
    width: 30,
    marginTop: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBottomView: {
    height: 50,
    width: 400,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    shadowColor: '#ecf6fb',
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  textblacktextstyle: {
    fontSize: 15,
    color: '#1B273E',
    fontWeight: 'bold',
  },
  textpinktextstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FB3954',
    textAlign: 'right',
    marginRight: 10,
  },
  playiconstyle: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MenuHomeIconStyle: {
    margin: 10,
    height: 50,
    width: 50,
  },
  MenuHomeUserIconStyle: {
    height: 30,
    width: 25,
    margin: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 20,
    marginTop: resp(20),
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    elevation: 20,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  smallcircleshapeview: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#ecf6fb',
    elevation: 20,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },

  smallcircletext: {
    shadowColor: '#ecf6fb',
    elevation: 20,
    margin: 15,
    color: 'black',
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOpacity: 1,
    alignItems: 'center',
  },
})

export default ElecticianActivity
