import React, {useState} from 'react'
import {
    View, 
    Text, 
    Alert
} from 'react-native'

import { 
    AlertDialog,
    Center,
    Button
} from "native-base";

import { styles } from '../css/basestyle'

const AlertComponent = (props) => {
    console.log(props)
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);

    const closeopen = (status) =>{
        setIsOpen(status)
    }

    useEffect(() =>{
        closeopen(Boolean(props.AlertComponentOpen))
    }, [])

    return(
        <View>
            <Center>
                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>{props.AlertComponentHeader}</AlertDialog.Header>
                    <AlertDialog.Body>
                        {props.AlertComponentBody}
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                    <Button.Group space={2}>
                        <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                        Cancel
                        </Button>
                        <Button colorScheme="coolGray" onPress={closeopen()}>
                        Okay
                        </Button>
                    </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
                </AlertDialog>
            </Center>
        </View>
    )
    
}

export default AlertComponent;