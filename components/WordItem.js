import React, { useState } from 'react';
import { TouchableRipple, List } from 'react-native-paper'

const WordItem = props => {

    const [isPressed, setPressed] = useState(false)


    const toggleCheckMark = () => {
        setPressed(curState => !curState)
    }
    return (
        <TouchableRipple
            rippleColor="#FF2C81"
            onPress={toggleCheckMark}>
            <List.Item
                title={props.title.replace(' ', '').length > 0 ? props.title.charAt(0) + ' as in: ' + props.title : 'SPACE'}
                titleStyle={{fontSize:15, fontWeight:"400"}}
                right={isPressed && (props => <List.Icon {...props} icon="check" />)}

            />
        </TouchableRipple>
    );
};

export default WordItem;