import React from 'react';
import WebView from 'react-native-webview';
import {AppStackNavigationParams} from './App';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<AppStackNavigationParams, 'Main'>;
  route: RouteProp<AppStackNavigationParams, 'Main'>;
}

const WebApp: React.FC<Props> = ({route, navigation}: Props) => {
  return (
    <WebView
      source={{uri: route.params.root}}
      decelerationRate="normal"
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={request => {
        if (route.params.root.startsWith('https://support.itsdcode.com')) {
          return true;
        }

        if (request.url.startsWith('https://support.itsdcode.com')) {
          navigation.push('Main', {root: request.url});
          return false;
        }
        return true;
      }}
    />
  );
};

export default WebApp;
