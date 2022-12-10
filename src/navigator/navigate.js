import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import {Stack_AppScreenData} from '../config/dataConfig'

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const StackAppScreenData = () =>{
    return(
        <Stack.Navigator>
            {
                Stack_AppScreenData.map((screenData, index) =>
                    <Stack.Screen 
                        key={index}
                        name={screenData.name}
                        component={screenData.component}
                        options={{ 
                            title: screenData.title,
                            headerTintColor: screenData.header.headerTintColor,
                            headerStyle: {
                                backgroundColor: screenData.header.backgroundColor,
                                height:screenData.header.height
                            },
                            headerTitleStyle: {
                                fontSize: screenData.header.fontSize,
                                fontWeight: screenData.header.fontWeight
                            }
                        }}
                    />
                )
            }
        </Stack.Navigator>
    )
}

const ScreenNavigation = () => {
    return StackAppScreenData();
}

export default ScreenNavigation;