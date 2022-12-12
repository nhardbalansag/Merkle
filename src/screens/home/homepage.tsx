import React, {useState, useEffect} from 'react'
import {
    View, 
    Text, 
    ActivityIndicator, 
    FlatList, 
    RefreshControl} from 'react-native'

import { styles, colors } from '../../asset/css/basestyle';

import CardComponent from '../../asset/components/card';
import AlertComponent from '../../asset/components/alert';

import { 
    useSelector
} from 'react-redux';

import * as HomeActions from '../../redux/home/home_actions';
import { useDispatch } from "react-redux";
import { APP_URL } from '../../config/app_url';

const HomePage = (props: any) : any =>{
    
    const dispatch = useDispatch()

    const home_data:any = useSelector(state => state);
    const getInititialData: any= home_data.home_reducer.home_screen_data

    const [getInitialLength, setInitialLength] = useState(home_data.home_reducer.inital_data_length)
    const [getRenderData, setRenderData]:any = useState([])
    const [getOnloadRefresh, setOnloadRefresh] = useState(true);

    const [getRefresh, setRefresh] = useState(false)

    // const test :any = [
    //     {
    //         id: 1,
    //         title: "helloworld title",
    //         sub_title: "helloworld sub",
    //         unixtime: 1175189462
    //     },
    // ]

    const LoadMore = () =>{
        getJsonData(getInititialData, getInitialLength + 20)
    }

    const getJsonData = async(home_screen_data:any, initialdata:number) =>{
        var tempData :any = []
        setRefresh(true)
       
        try {
            for(let i = 0; i < initialdata; i++){
                await fetch(APP_URL + 'v0/item/'+home_screen_data[i] + '.json', {
                    method:'GET',
                    headers:{
                        'Content-type': 'application/json',
                    }
                }).then(data => {
                    if (!data.ok) {
                        console.log("error GetHomeScreeTopStoriesJsonData in home_action redux folder")
                        throw Error(data.status.toString());
                    }
                    return data.json();
                }).then(responseData => {
                    tempData.push(responseData)
                }).catch(error => {
                    console.log("error GetHomeScreeTopStoriesJsonData in home_action redux folder")
                    throw Error(error);
                })
            }
            setRefresh(false)
            setOnloadRefresh(false)
            setRenderData(tempData)
            setInitialLength(initialdata)
            await dispatch(HomeActions.SaveToRedux(tempData, initialdata));
        } catch (error: any) {
            setRefresh(false)
            AlertDialog(error.message)
        }
    }

    const RefreshTrigger = () =>{
        getJsonData(getInititialData, getInitialLength)
    }

    useEffect(() =>{
        RefreshTrigger()
    },[])

    const ListItem = ({item} : any) :any =>{
        return(
            <View key={item.id} >
                <CardComponent navigation={props} card_data={item}/>
            </View>
        )
    }

    const AlertDialog = (message: string) =>{
        return(
            <AlertComponent Title={"warning"} Paragraph={message}/>
        )
    }

    const BottomNotificationLoading = () =>{
        return(
            <View style={[styles.mY1]}>
                <Text style={[styles.textDark, styles.font12, styles.textCenter]}>Loading Content</Text>
            </View>
        )
    }
    
    return(
        <View>
            {
                !getOnloadRefresh
                ?
                    <FlatList
                        keyExtractor={item => item.id.toString()} 
                        data={getRenderData} 
                        renderItem={ListItem}
                        ListFooterComponent={getRefresh ? BottomNotificationLoading: <></>}
                        numColumns={1}
                        refreshControl={
                            <RefreshControl colors={[colors.MERKLE_HEADER_BG]} refreshing={getRefresh} onRefresh={RefreshTrigger} />
                        }
                        onEndReached={() => !getRefresh ? LoadMore() : console.log("still loading")}
                    />
                :
                    <View>
                        <ActivityIndicator size="large" color={colors.MERKLE_HEADER_BG}/> 
                        <Text style={[styles.textDark, styles.font12, styles.textCenter]}>loading content</Text>
                    </View>
            }
        </View>
    )
}


export default HomePage;