import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {AppStackNavigationParams} from './App';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ActivityIndicator, StyleSheet, View} from "react-native";

interface Props {
  navigation: NativeStackNavigationProp<AppStackNavigationParams, 'Main'>;
  route: RouteProp<AppStackNavigationParams, 'Main'>;
}


const ActivityIndicatorElement = () => {
    return (
        <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator
            color="grey"
            size="large"
        />
        </View>
    );
};


const WebApp: React.FC<Props> = ({route, navigation}: Props) => {
    const [visible, setVisible] = useState<boolean>(false);


  return (
      <>
    <WebView
      source={{uri: route.params.root}}
      decelerationRate="normal"
      setSupportMultipleWindows={false}
      pullToRefreshEnabled={true}
      // onLoadStart={() => setVisible(true)}
      // onLoad={() => setVisible(false)}
      onLoadEnd={(p) => setVisible(p.nativeEvent.loading)}
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
          {visible ? <ActivityIndicator
              style={StyleSheet.absoluteFill}
              color="grey"
              size="large"
          />: null}

          {/*{visible ? <ActivityIndicatorElement /> : null}*/}
      </>
  );
};


const styles = StyleSheet.create({
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});


export default WebApp;
