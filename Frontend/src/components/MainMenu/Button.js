import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { Fonts } from '../../utils/Fonts'

class Button extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.buttonStyle, this.props.style]}>
        <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

export { Button }

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f4f9f4',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    margin: 5,
    fontFamily: 'amaticBold'
  }
}
