import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebApp from './WebApp';

function App(): JSX.Element {
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <WebApp root={'https://www.itsdcode.com'} />
    </SafeAreaView>
  );
}

export default App;
