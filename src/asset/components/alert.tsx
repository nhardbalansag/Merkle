import React, {useState} from 'react'

import { Paragraph, Dialog, Portal, Button } from 'react-native-paper';

import { styles } from '../css/basestyle'

const AlertComponent = (props: any): any => {

    const [visible, setVisible] = useState(true);

    const hideDialog = () => setVisible(false);

    return(
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={[styles.alignCenter, styles.textCapitalize]}>{props.Title}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph style={[styles.textCapitalize]}>{props.Paragraph}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => setVisible(false)}>Close</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
    
}

export default AlertComponent;