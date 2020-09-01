import React, {Component} from 'react'
//console.disableYellowBox = true
// import MapboxGL from '@react-native-mapbox-gl/maps'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import resp from 'rn-responsive-font'

import MapView from 'react-native-maps'

// MapboxGL.setAccessToken(
//   'pk.eyJ1IjoiaGFyc2hpdDEyMzQiLCJhIjoiY2tkdHRzcXY0MWx1MTJ0b2QzMjEzZm5mbSJ9.Nq-8_mhoGM-NWu6nOQogkw',
// )

class RidingActivity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      },
    }
  }
  render () {
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
              <Text style={styles.screentitle}>Book Cabs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container5}></View>
        </View>

        <View style={styles.container}>
          <View style={styles.inputView1}>
            <Image
              source={require('../images/loaction_icon.png')}
              style={styles.MailIconStyle}
            />

            <TextInput
              placeholder='Starting Point'
              placeholderTextColor='grey'
              underlineColorAndroid='transparent'
              style={styles.input}
            />
          </View>

          <View style={styles.inputView1}>
            <Image
              source={require('../images/loaction_icon.png')}
              style={styles.MailIconStyle}
            />

            <TextInput
              placeholder='Ending Point'
              placeholderTextColor='grey'
              underlineColorAndroid='transparent'
              style={styles.input}
            />
          </View>
          <View style={styles.page}>
            <View style={styles.container}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: -6.270565,
                  longitude: 106.75955,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}>
                {!!this.state.latitude && !!this.state.longitude && (
                  <MapView.Marker
                    coordinate={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                    }}
                    title={'Your Location'}
                  />
                )}
              </MapView>
              {/* <MapView
            style={styles.map}
            initialRegion={this.state.region}
            showsUserLocation={true}
            onMapReady={this.onMapReady}
            onRegionChangeComplete={this.onRegionChangeComplete}>
           
          </MapView>
          <MapView.Marker
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
              }}
              title={'Udaipur'}
              draggable></MapView.Marker> */}
            </View>
          </View>
          <View style={styles.CircleFlexDirection}>
            <TouchableOpacity
              style={styles.CircleButton}
              activeOpacity={0.2}
              // onPress={() => { this.props.navigation.navigate('WelcomeActivity') }}>
            >
              <Image
                style={styles.image}
                source={require('../images/car_left.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.CircleButton}
              activeOpacity={0.2}
              //  onPress={() => { this.props.navigation.navigate('WelcomeActivity') }}>
            >
              <Image
                style={styles.image}
                source={require('../images/car_middle.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.CircleButton}
              activeOpacity={0.2}
              //  onPress={() => { this.props.navigation.navigate('WelcomeActivity') }}>
            >
              <Image
                style={styles.image}
                source={require('../images/car_right.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabStyle}>
          <TouchableOpacity
            style={styles.tabButtonStyle}
            onPress={() => {
              this.props.navigation.navigate('WelcomeActivity')
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
  SearchViewBar: {
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#fff',
  },
  inputView1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '90%',
    margin: 10,
    borderRadius: 10,
    elevation: 20,
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
  },
  page: {
    flex: 1,
  },
  mapContener: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container1: {
    flex: 0.5,
    marginTop: 10,
    backgroundColor: 'white',
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
  image: {
    width: 50,
    height: 50,
  },
  container5: {
    flex: 0.2,
    backgroundColor: 'black',
  },

  input: {
    color: 'gray',
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
    marginTop: 50,
    width: 320,
    height: 50,
    padding: 10,
    marginBottom: 100,
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
    tintColor: 'white',
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

  bottomvideotextstyle: {
    color: '#887F82',
    fontSize: resp(8),
    marginRight: 10,
    marginTop: 3,
    textAlign: 'center',
  },
  styleNotificationTab: {
    tintColor: '#E40101',
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
    fontSize: resp(8),
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
    marginBottom: 36,
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
    marginTop: 25,
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
    fontSize: resp(30),
    textAlign: 'center',
  },
  ServiceTitle: {
    color: 'white',
    margin: 15,
    fontSize: resp(20),
    textAlign: 'center',
  },
  NextTitle: {
    color: 'white',
    marginBottom: 50,
    fontSize: resp(20),
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
    fontSize: resp(15),
    color: '#1B273E',
    fontWeight: 'bold',
  },
  textpinktextstyle: {
    fontSize: resp(15),
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
  CircleFlexDirection: {
    marginRight: 2,
    flex: 0.2,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  CircleButton: {
    marginLeft: 15,
    width: 120,
    height: 80,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
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
    marginTop: 50,
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

export default RidingActivity
