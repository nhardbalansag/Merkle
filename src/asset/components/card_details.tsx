import React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { styles, colors } from "../css/basestyle";

import { Card, Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CardDetailsComponent = (props :any) =>{
    return(
        <Card style={[styles.backgroundWhite, styles.mY1]}>
            <View style={[styles.flexRow, styles.justifyStart, styles.alignCenter, styles.pV10, styles.pX1]}>
                <View style={[styles.w15]}>
                    <Icon name={props.icon} size={40} color={colors.gray100} />
                </View>
                <Card.Content>
                    <Text style={[styles.textDark, styles.textBold, styles.font15]}>{props.content_data}</Text>
                    <Paragraph style={[styles.textDark, styles.font12]}>
                        {props.card_title}
                    </Paragraph>
                </Card.Content>
            </View>
        </Card>
    )
}

export default CardDetailsComponent;