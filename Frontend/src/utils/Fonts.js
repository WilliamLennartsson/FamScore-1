//import React, { Component } from 'react'

// export const Fonts = {
//     indieFlower: 'indieFlower',
//     amaticBold: 'amaticSC-Bold',
//     amaticRegular: 'amaticSC-Regular' 
// }

export const Fonts = {
    indieFlower: require('../../assets/fonts/indieFlower.ttf'),
    amaticBold: require('../../assets/fonts/amaticSC-Bold.ttf')
}

// export default class Fonts extends Component {
//     state = {
//         fontLoaded: false
//     }

//     async componentDidMount() {
//         await Fonts.loadAsync({
//           'amaticBold': require('../../assets/fonts/amaticSC-Bold.ttf'),
//           'indieFlower': require('../../assets/fonts/indieFlower.ttf')
//         });
    
//         this.setState({ fontLoaded: true });
//       }
// }
