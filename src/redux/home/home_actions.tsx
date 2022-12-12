export const GET_HOMESCREEN_DATA = 'GET_HOMESCREEN_DATA';
export const SAVE_TO_REDUX = 'SAVE_TO_REDUX';
export const STORE_USER_DATA = 'STORE_USER_DATA';
export const STORE_USER_TOP_STORIES_DATA = 'STORE_USER_TOP_STORIES_DATA';

import { APP_URL } from "../../config/app_url";


export const SaveToRedux = (data: any, data_length: number): any =>{
    return async (dispatch: any, getState: any) =>{
        dispatch({
            type:                       SAVE_TO_REDUX,
            home_screen_data_details:   data,
            inital_data_length:         data_length,
        }) 
    }
}

export const SaveUserTopStoriesDataToRedux = (data: any): any =>{
    return async (dispatch: any, getState: any) =>{
        dispatch({
            type:                   STORE_USER_TOP_STORIES_DATA,
            userTopStoriesData:     data
        }) 
    }
}

export const GetHomeScreeTopStories = () :any =>{
    return async (dispatch: any, getState: any) =>{

        await fetch(APP_URL + 'v0/topstories.json', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }
        }).then(data => {
            if (!data.ok) {
                throw Error(data.status.toString());
            }
            return data.json();
        }).then(responseData => {
            dispatch({
                type:               GET_HOMESCREEN_DATA,
                home_screen_data:   responseData
            })
        }).catch(error => {
            throw Error(error);
        }); 
    }
}

export const GetUserData = (user:string) :any =>{
    return async (dispatch: any, getState: any) =>{

        await fetch(APP_URL + 'v0/user/'+user+'.json', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }
        }).then(data => {
            if (!data.ok) {
                throw Error(data.status.toString());
            }
            return data.json();
        }).then(responseData => {
            dispatch({
                type:        STORE_USER_DATA,
                user_data:   responseData
            })
        }).catch(error => {
            throw Error(error);
        }); 
    }
}


