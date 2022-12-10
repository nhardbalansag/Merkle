/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import { 
  Dimensions 
} from 'react-native';

import SplashScreen from './src/screens/splash/SplashScreen';

import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigation from './src/navigator/navigate';
import { styles, colors } from './src/asset/css/basestyle';

const App = () => {

  const windowWidth: number = Dimensions.get('window').width;
  const windowHeight: number = Dimensions.get('window').height;
  const window: any = Dimensions.get("window");
  const screen: any = Dimensions.get("screen");

  const [loaded, setload] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen });

  const appStart = () =>{
    setTimeout(() => {
      setload(true)
    }, 3000);
  }

  useEffect(() =>{
    appStart()
  },[])

  return (
    <>
      {
        loaded 
        ? 
          <>
            {/* <Provider store={Store}> */}
              <StatusBar
                animated={true}
                backgroundColor={colors.MERKLE_HEADER_BG}
                barStyle={'light-content'}
                hidden={false} 
              />
              <SafeAreaView>
                <NavigationContainer>
                  {/* navigation screen here */}
                  <View style = {[{height:windowHeight}]}>
                      <ScreenNavigation/>
                  </View>
                  {/* navigation screen end */}
                </NavigationContainer>
              </SafeAreaView>
            {/* </Provider> */}
          </>
        : 
          <>
            <View style = {[{height:windowHeight, flex: 1}]}>
              <StatusBar translucent backgroundColor="transparent"/>
              <SplashScreen/>
            </View>
          </>
      }
    </>
  );
};

export default App;
