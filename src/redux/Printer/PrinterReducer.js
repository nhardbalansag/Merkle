
import {
    SET_BLUETOOTH_DEVICE
} from "./PrinterAction"

const InitialStates = {
    DeviceAddress   :   null,
    DeviceName      :   null,
}

export default (state = InitialStates, action) =>{
    switch(action.type){
        case SET_BLUETOOTH_DEVICE:
            return{
                ...state,
                DeviceAddress   :  action.macAddress,
                DeviceName      :  action.deviceName,
            }
        default :
            return{
                ...state
            }
    }
    return state
}