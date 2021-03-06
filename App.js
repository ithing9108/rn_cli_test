/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native"; 
import SplashScreen from 'react-native-splash-screen';
import Stack from "./navigation/Stack";

const App: () => React$Node = () => {
  
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {};
  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide();
        console.log("bofore setReady");
        setIsReady(true);
    }, 2000); 
  }, [])
  // isReady? SplashScreen.hide() : 
  return (
    isReady? (
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>

    ):(
      <>
        <Text>Loading...</Text>
      </>
    )
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
