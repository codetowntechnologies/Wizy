/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginActivity from './Component/LoginActivity';
import WelcomeActivity from './Component/WelcomeActivity';
import OderFoodActivity from './Component/OderFoodActivity';
import RidingActivity from './Component/RidingActivity';
import ProfileActivity from './Component/ProfileActivity';
import ElecticianActivity from './Component/ElecticianActivity';
import ServiceActivity from './Component/ServiceActivity';
import HistoryActivity from './Component/HistoryActivity';
import TripActivity from './Component/TripActivity';
import CabListActivity from './Component/CabListActivity'
import OderDetailsActivity from './Component/OderDetailsActivity';
import RestaurantNameActivity from './Component/RestaurantNameActivity'
import OderPreviewActivity from './Component/OderPreviewActivity'
import PaymentActivity from './Component/PaymentActivity'
import OtpActivity from './Component/OtpActivity'
import Model from './Component/Model'
import SplashActivity from './Component/SplashActivity'
import PaymentCardTextField from './Component/PaymentCardTextField'

const NavStack = createStackNavigator(
    {
       // eslint-disable-next-line no-trailing-spaces
       WelcomeActivity: { screen: WelcomeActivity },
       LoginActivity:   { screen: LoginActivity },
       OderFoodActivity: { screen: OderFoodActivity},
       RidingActivity:  { screen: RidingActivity},
       ProfileActivity: { screen: ProfileActivity},
       ElecticianActivity:{ screen: ElecticianActivity},
       ServiceActivity : { screen: ServiceActivity},
       HistoryActivity: {screen : HistoryActivity},
       TripActivity :{screen : TripActivity},
       OderDetailsActivity :{screen :OderDetailsActivity},
       CabListActivity :{screen : CabListActivity},
       RestaurantNameActivity:{screen: RestaurantNameActivity},
       OderPreviewActivity:{screen:OderPreviewActivity},
       PaymentActivity:{screen:PaymentActivity},
       OtpActivity :{screen:OtpActivity},
       Model :{screen:Model},
       SplashActivity: {screen:SplashActivity},
       PaymentCardTextField:{screen:PaymentCardTextField},



        // eslint-disable-next-line no-trailing-spaces
        
    },
    {
        initialRouteName: 'RidingActivity',
        headerMode: 'none',

    }

);

const Apps = createAppContainer(NavStack);

export default class App extends React.Component {

    render() {


        return <Apps />;
    }
}
