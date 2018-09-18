import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setFamily, setLoggedIn } from '../../actions';
import { Button } from '../MainMenu';


class LoginFamily extends Component {

  constructor(props) {
    super(props);
    this.state = {
      familyName: '',
      password: '',
      nickName: '',
    };
    this.loginFamily = this.loginFamily.bind(this);
  }

  loginFamily() {
    // const bodyy = {
    //   familyName: this.state.familyName,
    //   password: this.state.password,
    //   nickName: this.state.nickName
    // }
    fetch('http://localhost:3000/families?familyName=' + this.state.familyName + '&password=' + this.state.password + '&name=' + this.state.nickName)
      .then((response) => {
        console.log('responseInLoginFamily: ', response);
        return response.json();
      }).then((result) => {
        if (result.length > 0) {
          console.log('result at pos 0: ', result[0].json);
          this.props.setFamily(result[0])
          this.props.setLoggedIn(this.state.nickName, true);
          Actions.Family_Key();
        }
      });
  }
  render() {
    const { familyName, password, nickName } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          
            <TextField
              label='FamilyName'
              value={familyName}
              color='#000'
              baseColor='#000000'
              tintColor='#616161'
              onChangeText={value => this.setState({ familyName: value })}
            />
            <TextField
              label='Password'
              baseColor='#000'
              tintColor='#616161'
              secureTextEntry
              value={password}
              onChangeText={value => this.setState({ password: value })}
            />
            <TextField
              label='Nickname'
              baseColor='#000'
              tintColor='#616161'
              value={nickName}
              onChangeText={value => this.setState({ nickName: value })}
            />
          
          <View style={styles.buttonContainer}>
            <Button style={styles.buttonStyle} onPress={() => this.loginFamily()}>Login To Family</Button>
            <Button style={styles.buttonStyle} onPress={() => Actions.CreateFamily_Key()}>Create Family</Button>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ familyReducer }) => {
  const { familyObject, nickName, isLoggedIn } = familyReducer

  return { familyObject, nickName, isLoggedIn }
}

export default connect(mapStateToProps, { setFamily, setLoggedIn })(LoginFamily)

const styles = {
  buttonStyle: {
    backgroundColor: '#f4f9f4',
    borderColor: '#000',
  },
  buttonContainer: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  }
}
