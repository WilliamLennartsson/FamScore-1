import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card } from './index'

import { Fonts } from '../../utils/Fonts'

export default class AddCard extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                
                <Card style={styles.cardStyle}>
                    <View style={styles.cardItemsStyle}>

                            <View style={styles.cardButtonContainerStyle} >
                                <TouchableOpacity style={styles.addButtonStyle} onPress={this.props.onPress} ><Text style={styles.addButtonTextStyle}>+</Text></TouchableOpacity>
                            </View>
                        
                    </View>
                </Card>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#f4f9f4',
        marginBottom: 10
    },
    cardButtonContainerStyle: {
        flex: 2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardStyle: {
        backgroundColor: '#c4e3cb',
        borderColor: '#000',
        borderWidth: 2,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    cardItemsStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    addButtonTextStyle: {
        fontSize: 70,
        fontFamily: 'amaticBold',
        padding: 0,
        margin: 0,
        color: '#616161'
    },
    addButtonStyle: {
        backgroundColor: '#f4f9f4',
        borderColor: '#000',
        borderRadius: 20,
        padding: 0,
        flex: 1,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
})
