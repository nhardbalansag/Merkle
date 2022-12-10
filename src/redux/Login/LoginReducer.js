
import {
    SET_BLUETOOTH_DEVICE
} from "./LoginAction"

const InitialStates ={
    DeviceAddress:null
}

export default (state = InitialStates, action) =>{
    switch(action.type){
        case SET_BLUETOOTH_DEVICE:
            return{
                ...state,
                DeviceAddress:action.device
            }
        default :
            return{
                ...state
            }
    }
    return state
}