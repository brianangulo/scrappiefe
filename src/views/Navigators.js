//Core imports
import React from 'react';
import { useWindowDimensions } from "react-native";
//Dependecies imports
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//Views Imports
import WelcomeView from './WelcomeView';

//Caching navigators + any hooks + extras
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Stack navigators components
const WelcomeViewStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome!">
      <Stack.Screen name="Welcome!" component={WelcomeView} />
    </Stack.Navigator>
  );
};
//Main drawer navigator
const MainDrawerNav = () => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    return (
        <Drawer.Navigator drawerType="permanent" drawerStyle={{
            width: isLargeScreen ? "17%" : "20%",
        }}>
            <Drawer.Screen name="Welcome" component={WelcomeViewStack} />
        </Drawer.Navigator>
    );
}

export default MainDrawerNav;
