import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Fonts } from '../../utils/Fonts'

class Header extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        )
    }
}

export { Header }

const styles = {
    viewStyle: {
        backgroundColor: '#616161',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'amaticBold'
    }
}
