import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/components/Router/Router'

import { Fonts } from './src/utils/Fonts'
import { Font, AppLoading } from 'expo'

export default class App extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     fontLoaded: false
  //   }
  // }

  state = {
    fontLoaded: false
  }

  async componentDidMount() {

    try {

      await Font.loadAsync({
        amaticBold: require('./assets/fonts/amaticSC-Bold.ttf'),
        indieFlower: require('./assets/fonts/indieFlower.ttf')
      })

      this.setState({ fontLoaded: true })

    } catch (error) {
      console.log('error loading fonts', error);
    }

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    if (!this.state.fontLoaded) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
