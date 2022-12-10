export const SET_BLUETOOTH_DEVICE = 'SET_BLUETOOTH_DEVICE';

export const login = (username, password, domainSetting) =>{

    var details = {
        'username': username,
        'password': password,
        'grant_type': 'password'
    };
}

export const setBluetoothDevice = (device) =>{
    return async (dispatch) =>{
        dispatch({
            type: SET_BLUETOOTH_DEVICE, 
            device: device
        });
    }
}
