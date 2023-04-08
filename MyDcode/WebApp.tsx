import React from 'react';
import WebView from 'react-native-webview';

interface Props {
  root: string;
}

const WebApp: React.FC<Props> = ({root}) => {
  return <WebView source={{uri: root}} />;
};

export default WebApp;
