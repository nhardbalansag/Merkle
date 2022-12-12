import React from 'react'
import {View, Text, ScrollView, Linking} from 'react-native';

import { Card, Button } from 'react-native-paper';

import { styles, colors } from "../../asset/css/basestyle";

import CardDetailsComponent from "../../asset/components/card_details";

import { 
    useSelector
} from 'react-redux';

const NewsDetails = (props:any) : any =>{

    const card_data:any = useSelector(state => state);

    const datetime = (unixtime: number) : Date =>{

        var date: Date = new Date(unixtime * 1000);

        return date
    }

    return(
        <ScrollView >
            <View style={[{margin: 5}]}>
                <View>
                    <Card style={[styles.backgroundWhite, styles.mY1]}>
                        <View style={[styles.flexRow, styles.justifyStart, styles.alignCenter, styles.pV10, styles.pX1]}>
                            <Card.Content>
                                <Text style={[styles.textDark, styles.textBold, styles.font25, styles.textCapitalize, styles.mB1]}>{card_data.home_reducer.userTopStoriesData.title}</Text>
                                <Text style={[styles.textDark, styles.font15]}>Story timestamp: ({card_data.home_reducer.userTopStoriesData.time})</Text>
                                <Text style={[styles.textDark, styles.font15, styles.mB1]}>{datetime(card_data.home_reducer.userTopStoriesData.time).toDateString()}</Text>
                                <Text style={[styles.textPrimary, styles.textBold, styles.font11, styles.mB1]}>{card_data.home_reducer.userTopStoriesData.url}</Text>
                                <Button style={[{backgroundColor:colors.MERKLE_HEADER_BG}, styles.mB1]} icon="camera" mode="contained" onPress={() => Linking.openURL(card_data.home_reducer.userTopStoriesData.url)}>
                                    <Text style={[styles.textWhite, styles.textCenter]}>Open URL</Text>
                                </Button>
                            </Card.Content>
                        </View>
                    </Card>
                </View>
                <View>
                    <CardDetailsComponent content_data={card_data.home_reducer.userTopStoriesData.by} icon={"account-circle"} card_title={"Author ID"}/>
                    <CardDetailsComponent content_data={card_data.home_reducer.user_data.karma} icon={"stars"} card_title={"Author Karma Score"}/>
                    <CardDetailsComponent content_data={card_data.home_reducer.userTopStoriesData.score} icon={"star"} card_title={"Story score"}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewsDetails;