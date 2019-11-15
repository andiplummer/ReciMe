import React, { Component } from 'react'
import { View, 
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import * as firebase from 'firebase'
import { FirebaseWrapper } from '../firebase/firebase';
import { throwStatement } from '@babel/types';
import {Actions} from 'react-native-router-flux'


export default class LogoutScreen extends Component {
  constructor(props) {
    super(props);
  }

  signOut() {
    this.props.navigation.navigate('Welcome')
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Are you sure you'd like to logout?</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.signOut()}
            >
              <Text style={styles.btnText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.redirect} onPress={() => this.props.navigation.navigate('Recipes')}>Keep me logged in!</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0feff"
  },
  welcome: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    width: "90%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#ffffff"
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userBtn: {
    backgroundColor: "#ffffff",
    padding: 15,
    width: "90%",
    display: "flex"
  },
  btnText: {
    fontSize: 18,
    textAlign: "center"
  },
  redirect: {
    marginTop: 10,
  }
});