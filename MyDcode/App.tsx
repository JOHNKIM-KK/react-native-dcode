import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebApp from './WebApp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from "./Splash";

export type AppStackNavigationParams = {
  Splash: undefined;
  Main: {root: string};
};

const Stack = createNativeStackNavigator<AppStackNavigationParams>();

function App(): JSX.Element {
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{headerTintColor: '#82888'}}>
        <Stack.Screen name={'Splash'} component={Splash} options={{headerShown:false}}/>
        <Stack.Screen
          name={'Main'}
          component={WebApp}
          initialParams={{root: 'https://www.itsdcode.com'}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default App;
