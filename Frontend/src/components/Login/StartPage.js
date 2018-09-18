import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, } from '../MainMenu'
import { Fonts } from '../../utils/Fonts'
import { LinearGradient } from 'expo'

class StartPage extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>FamScore</Text>
        </View>


        <View style={styles.buttonContainer}>
          <Button style={styles.buttonStyle} onPress={() => Actions.LoginFamily_Key()}>Login</Button>
        </View>


      </View>
    )
  }
}

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'amaticBold',
    fontSize: 50
  },
  buttonStyle: {
    backgroundColor: '#f4f9f4',
    borderColor: '#000',
  },
  buttonContainer: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
})
