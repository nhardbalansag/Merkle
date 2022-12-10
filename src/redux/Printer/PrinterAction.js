export const SET_BLUETOOTH_DEVICE = 'SET_BLUETOOTH_DEVICE';

export const setBluetoothDevice = (deviceMacAddress, deviceName) =>{
    return async (dispatch, getState) =>{
        dispatch({
            type: SET_BLUETOOTH_DEVICE, 
            deviceName: deviceName,
            macAddress: deviceMacAddress,
        });
    }
}
