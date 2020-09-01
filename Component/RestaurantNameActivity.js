import React, { Component } from 'react';
console.disableYellowBox = true;

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    images,
    SafeAreaView,
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import resp from 'rn-responsive-font';




class RestaurantName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/avatar/avatar1.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
                {ItemName: 'Item Name:',image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60.png",ItemQuantity :"Item Quantity ",Price :'100/-'},
            ],
          };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

        <View style={styles.headerView}>

                 <View style={styles.container3}>
                    <TouchableOpacity 
                  
                    
                                  onPress={() => { this.props.navigation.navigate('Model') }}>

                             <Image source={require('../images/menu.png')}
                            style={styles.MenuHomeIconStyle} />

                    </TouchableOpacity>
                    </View>
                    <View style={styles.container4}>
                  <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} >

                        <Text style={styles.screentitle}>Restaurant Name</Text>

                    </TouchableOpacity> 
                    </View>
                    <View style={styles.container5}></View>
                </View>

                <View style={styles.container} >

                    <View style={styles.container1}>

                    </View>
                    <View style={styles.headerView1}>
                
                <TouchableOpacity 
                 onPress={() => { this.props.navigation.navigate('ServiceActivity') }}>

                 <Text style={styles.MenuTitle}>Menu</Text>

                </TouchableOpacity> 
              

               </View>

                    <View style={styles.container}>

                    
                   
                    <FlatList 
                        style={styles.container} 
                        enableEmptySections={true}
                        data={this.state.data}
                        keyExtractor= {(item) => {
                        return item.key;
                        }}
                        renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                            <View style={styles.box}>
                                <Image style={styles.image} source={{uri:item.image}} />
                                <View style={styles.info}>
                                <View style={styles.box1}>
                                <Text  style={styles.name}>{item.ItemName}</Text>
                                <Text  style={styles.name}>{item.ItemQuantity}</Text>
                                
                                <View style={styles.row}>
                                </View>
                                </View>
                                <TouchableOpacity
                                    style={styles.BookButtonStyle}
                                    activeOpacity={.20}
                                    onPress={() => { this.props.navigation.navigate('PlumberActivity') }}>
                                    <Text style={styles.buttonWhiteTextStyle}>{item.Price}</Text>

                                </TouchableOpacity>
                                </View>
                            </View>
                            </TouchableOpacity>
                        )
                        }}/>
                    </View>

                </View>
                <TouchableOpacity
                                    style={styles.loginButtonStyle}
                                    activeOpacity={.20}
                                     onPress={() => { this.props.navigation.navigate('OderPreviewActivity') }}>

                                    <Text style={styles.buttonWhiteTextStyle}>Oder Now</Text>

                                </TouchableOpacity>

                <View style={styles.tabStyle}>

                    <TouchableOpacity style={styles.tabButtonStyle}
                        onPress={() => { this.props.navigation.navigate('Dashboard') }}>

                        <Image source={require('../images/home_active.png')}
                            style={styles.StyleHomeTab} />

                       

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabButtonStyle}
                                    onPress={() => { this.props.navigation.navigate('OderFoodActivity') }}>

                        <Image source={require('../images/food.png')}
                            style={styles.StyleVideoTab} />

                       

                    </TouchableOpacity>



                  



                    <TouchableOpacity style={styles.tabButtonStyle}
                                    onPress={() => { this.props.navigation.navigate('RidingActivity') }}>

                        <Image source={require('../images/bus.png')}
                            style={styles.styleNotificationTab} />
                        

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.tabButtonStyle}
                       onPress={() => { this.props.navigation.navigate('HistoryActivity') }}>
    
                  <Image source={require('../images/history.png')}
                            style={styles.StyleProfileTab} />


                    </TouchableOpacity>


                </View>

            </SafeAreaView>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F9FE',
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
        fontWeight: 'bold'
    },
    loginButtonStyle: {
        marginTop: 15,
        width: 200,
        height: 50,
        padding: 10,
        backgroundColor: '#000',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
      },
    listItem: {
        marginTop: 2,
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",

    },
    bottomactivetextstyle: {
        color: "#FB3954",
        fontSize: resp(8),
        marginTop: 5,
        textAlign: 'center'
    },
    item:{
        color:"#000",
        fontSize: resp(25),
        margin:15,
        marginLeft:30,
       
    },
    title:{
        color:"#000",
        fontSize: resp(25),
        margin:15,
        marginLeft:30,
       
    },
    bottominactivetextstyle: {
        color: "#887F82",
        fontSize: resp(25),
        marginTop: 3,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
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
    bottomvideotextstyle: {
        color: "#887F82",
        fontSize: resp(25),
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
    BookButtonStyle: {
        marginTop: resp(60),
        marginLeft:resp(80),
        width: resp(80),
        height:resp(40),
        padding: 10, 
        backgroundColor: '#000',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
      },
    bottomnotificationtextstyle: {
        color: "#887F82",
        fontSize: resp(25),
        marginLeft: 10,
        marginTop: 3,
        textAlign: 'center'
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
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    }
    ,
    tabButtonStyle: {
        flex: .25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    headerView: {
        flex:0.10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#000'
    },
    headerView1: {
        marginTop:5,
        flexDirection: 'row',
        height: 40,
        backgroundColor: '#000'
    },
    screentitle: {
        fontWeight:'bold',
        color: "white",
        fontSize: resp(20),
        textAlign: 'center'
    },
    MenuTitle: {
        color: "white",
        margin:10,
        fontSize: resp(20),
        textAlign: 'center'
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
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1
    },
    icon:{
        width:30,
        height:30,
      },
      image: {
        margin:10,
        width: 70,
        height:70
      },
      info: {
        flex:1,
        flexDirection: 'row',
        margin:2
      },
      name: {
        fontSize: resp(18),
        color: '#333'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop:10
      },
      iconContainer: {
        flex: 1,
        alignItems:'center'
      },
      iconFonts: {
        color: 'gray',
      },
      red: {
        color: '#FF4500',
      },
      box: {
        marginTop:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height:1,
          width:-2
        },
        elevation:2
      },
      box1: {
        marginTop:10,
        flexDirection: 'column',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
          height:1,
          width:-2
        },
        elevation:2
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
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    buttonWhiteTextStyle: {
        textAlign: 'center',
        fontSize: resp(15),
        color: 'white',
        alignContent: 'center',
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
        marginRight: 10
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
        height:50,
        width:50,
    },
    MenuHomeUserIconStyle: {
        height: 30,
        width: 25,
        margin: 5,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center'


    },

    smallcircletext: {
        shadowColor: '#ecf6fb',
        elevation: 20,
        margin: 15,
        color: 'black',
        textAlign: 'center',
        shadowColor: 'grey',
        shadowOpacity: 1,
        alignItems: 'center'
    },
    GridViewContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:40,
        margin: 5,
        backgroundColor: '#fff'
     },
     GridViewTextLayout: {
        fontSize: resp(15),
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
      }

});
export default RestaurantName;