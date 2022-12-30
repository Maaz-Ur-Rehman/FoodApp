// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Start from './start';
import SignUp from './singup';
import Login from './login';
import RegisterItem from './RegisterItem';
import Product from './product';
import OrderLocation from './orderLocation';



const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen screenOptions={{headerShown:false}} name="start" component={Start} />
        <Stack.Screen screenOptions={{headerShown:false}} name="signup" component={SignUp} />

        <Stack.Screen screenOptions={{headerShown:false}} name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="item" component={RegisterItem} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="orderLoc" component={OrderLocation} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;