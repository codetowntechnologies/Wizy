import React, { Component } from 'react';
console.disableYellowBox = true;
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import resp from 'rn-responsive-font';




class ProfileActivity extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <SafeAreaView style={styles.container}>
                 <View style={styles.headerView}>
                 <View style={styles.container3}>
                    <TouchableOpacity 
                    
                             onPress={() => { this.props.navigation.navigate('WelcomeActivity') }}>

                             <Image source={require('../images/back_arrow.png')}
                            style={styles.MenuHomeIconStyle} />

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container4}>
                  <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >

                        <Text style={styles.screentitle}>Profile</Text>

                    </TouchableOpacity> 
                    </View>
                    <View style={styles.container5}></View>

                   
                </View>
                <View style={styles.container}>
                <TouchableOpacity  style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../images/logo.png')}
                            style={styles.ProflieImages}>

                        </Image>
                    </TouchableOpacity>


                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.UserName}>John Deo</Text>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.UserSubTitle}>San Francisco,CA</Text>
                    </View>
                    
                    <TouchableOpacity
                                    style={styles.BookButtonStyle}
                                    activeOpacity={.20}
                                    onPress={() => { this.props.navigation.navigate('LoginActivity') }}>
                                    <Text style={styles.buttonWhiteTextStyle}>Log Out</Text>

                    </TouchableOpacity>
                   
                    </View>
                </SafeAreaView>
        );
    }
}
 
 const styles=StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#F6F9FE',
    },
    headerView: {
        flex:0.10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        backgroundColor: '#000'
    },
    container3:{
        flex:0.2,
        marginLeft:10,
        backgroundColor:'black'
    },
    container4:{
        flex:0.6,
        backgroundColor:'black'
    },
    container5:{
        flex:0.2,
        backgroundColor:'black'
    },
    screentitle: {
        fontWeight:'bold',
        color: "white",
        fontSize: resp(25),
        textAlign: 'center'
    },
    UserName: {
        color: "black",
        fontSize: resp(30),
        fontWeight:"bold",
        textAlign: 'center'
    },
    UserSubTitle: {
        color: "black",
        fontSize: resp(20),
        textAlign: 'center'
    },
    ProflieImages:{
        margin:20,
        width:150,
        height:150,
    },
     BookButtonStyle: {
        marginTop: 50,
        width: 320,
        height: 50,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
      },
      BookButtonStyle1: {
        width: 320,
        height: 50,
        marginBottom: 2,
        backgroundColor: '#000',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
      },
      MenuHomeIconStyle: {
        margin: 10,
        height:50,
        width:50,
    },
      buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(16),
        color: 'white',
        alignContent: 'center',
    },
 })

export default ProfileActivity;