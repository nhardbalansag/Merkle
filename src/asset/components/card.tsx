import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

import { styles, colors } from "../css/basestyle";

import { Card, Badge, Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from "react-redux";

import * as HomeActions from '../../redux/home/home_actions';

const CardComponent = (props :any) =>{

    const dispatch = useDispatch()

    const datetime = (unixtime: number) : Date =>{

        var date: Date = new Date(unixtime * 1000);

        return date
    }

    const StoreDataToRedux = async(user: string) =>{
        await dispatch(HomeActions.GetUserData(user));
        await dispatch(HomeActions.SaveUserTopStoriesDataToRedux(props.card_data));
        props.navigation.navigation.navigate('NewsDetails')
    }

    return(
        <View style={[{margin: 5}]} key={props.key}>
            <Card style={[styles.backgroundWhite]}>
                <TouchableOpacity 
                    onPress={() => StoreDataToRedux(props.card_data.mfiguiere)} 
                    style={[styles.flexRow, styles.justifySpaceBetween, styles.alignCenter, styles.pV10, styles.pX1]}>
                    <View style={[styles.w15]}>
                        <Icon name="image" size={40} color={colors.gray100} />
                    </View>
                    <View style={[{marginBottom:5}, styles.w85]}>
                        <Card.Content>
                            <Text style={[styles.textDark, styles.textBold, styles.font15]}>{props.card_data.title}</Text>
                            <Paragraph style={[styles.textDark, styles.font12]}>
                                Author: <Text style={[styles.textBold, styles.textCapitalize]}>{props.card_data.by}</Text>
                            </Paragraph>
                        </Card.Content>
                        <Card.Content>
                            <View style={[styles.flexRow, styles.justifySpaceBetween, styles.alignCenter, styles.mT1]}>
                                <View style={[{marginRight: 10}]}>
                                    <Text style={[styles.textGray300, styles.font12]}>{datetime(props.card_data.time).toDateString()}</Text>
                                </View>
                                <View style={[styles.flexRow, styles.justifySpaceBetween, styles.alignCenter, {marginRight: 10}]}>
                                    <Badge style={[styles.backgroundLightBlue, styles.textWhite, {marginRight: 5}]}>{props.card_data.kids ? props.card_data.kids.length : 0}</Badge>
                                    <Text style={[styles.textLightBlue, styles.textBold, styles.font12]}>comments</Text>
                                </View>
                                <View style={[styles.flexRow, styles.justifySpaceBetween, styles.alignCenter]}>
                                    <Text style={[styles.textWarning, styles.textBold, styles.font12]}>{props.card_data.score}</Text>
                                    <Icon name="star" size={20} color={colors.warningColor} />
                                </View>
                            </View>
                        </Card.Content>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

export default CardComponent;