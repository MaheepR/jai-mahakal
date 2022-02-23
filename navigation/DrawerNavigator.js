import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout'

const drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <drawer.Navigator>
            <drawer.Screen name='home' component={BottomTabNavigator}/>
            <drawer.Screen name='profile' component={Profile}/>
            <drawer.Screen name='logout' component={Logout}/>
        </drawer.Navigator>
    );
}

export default DrawerNavigator;