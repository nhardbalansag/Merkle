import React from 'react'
import {
    View, 
    Image,
    Text
} from 'react-native'

import {
    styles,
    colors
} from "../../asset/css/basestyle";

const SplashScreen = () =>{
    return(
        <View 
            style = {
                [
                    styles.flex1,
                    styles.alignCenter,
                    styles.justifyCenter,
                    {backgroundColor: colors.MERKLE_HEADER_BG}
                ]
            }
        >
            <View>
                <Image
                    source={require('../../app_resource/ic_launcher/1024.png')}
                    resizeMode={'contain'}
                    style={{width:100, height: 150, paddingHorizontal:10 }} 
                />
            </View>
            <View style={
                [ 
                    styles.justifyCenter, 
                    styles.alignCenter,
                    styles.w90
                ] 
            }>
                <Text style={
                    [
                        styles.textCenter,
                        styles.textWhite,
                        styles.font15
                    ]
                }>
                    © Copyright 2022 | All Rights Reserved | Develop by Bernard Balansag
                </Text>
            </View>
        </View>
    )
}

export default SplashScreen;