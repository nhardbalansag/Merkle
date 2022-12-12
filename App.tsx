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

import {Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';

import {
  createStore, 
  combineReducers, 
  applyMiddleware
} from 'redux';

import SplashScreen from './src/screens/splash/SplashScreen';

import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigation from './src/navigator/navigate';
import { styles, colors } from './src/asset/css/basestyle';

import { Provider as PaperProvider } from 'react-native-paper';

import home_reducer from './src/redux/home/home_reducer';

const RootReducer = combineReducers({
  home_reducer:  home_reducer
})

const Store = createStore(RootReducer, applyMiddleware(thunk))

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
      <StoreProvider store={Store}>
          <PaperProvider>
            <StatusBar
              animated={true}
              backgroundColor={colors.MERKLE_HEADER_BG}
              barStyle={'light-content'}
              hidden={false} 
            />
            {
              loaded 
              ? 
                <SafeAreaView style={[{backgroundColor: colors.MERKLE_HEADER_BG}]}>
                  <NavigationContainer> 
                    {/* navigation screen here */}
                    <View style = {[{height:windowHeight}]} >
                        <ScreenNavigation/>
                    </View>
                    {/* navigation screen end */}
                  </NavigationContainer>
                </SafeAreaView>
              :
                <View style = {[{height:windowHeight, flex: 1, backgroundColor: colors.MERKLE_HEADER_BG}]}>
                  <StatusBar translucent backgroundColor="transparent"/>
                  <SplashScreen/>
                </View>
            }
          </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;
