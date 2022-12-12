
import { GET_HOMESCREEN_DATA } from "./home_actions"
import { STORE_USER_DATA } from "./home_actions"
import { STORE_USER_TOP_STORIES_DATA } from "./home_actions"
import { SAVE_TO_REDUX } from "./home_actions"

const InitialStates : any = {
    home_screen_data:           [],
    home_screen_data_details:   [],
    userTopStoriesData:         [],
    user_data:                  [],
    inital_data_length:         20
}

export default (state = InitialStates, action: any) =>{
    switch(action.type){
        case GET_HOMESCREEN_DATA:
            return{
                ...state,
                home_screen_data: action.home_screen_data
            }
        case STORE_USER_DATA:
            return{
                ...state,
                user_data: action.user_data
            }
        case STORE_USER_TOP_STORIES_DATA:
            return{
                ...state,
                userTopStoriesData: action.userTopStoriesData
            }
        case SAVE_TO_REDUX:
            return{
                ...state,
                home_screen_data_details:   action.home_screen_data_details,
                inital_data_length:         action.inital_data_length,
            }
        default :
            return{
                ...state
            }
    }
    return state
}