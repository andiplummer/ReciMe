import React, { Component } from 'react'
import {Text, 
  View, 
  StyleSheet, 
  ScrollView, 
  Modal, 
  TextInput, 
  Image,
  TouchableHighlight, 
  SafeAreaView, 
  TouchableOpacity} 
  from 'react-native'
  import {Header} from './Header'


  export class Grocery extends Component {


    render() {
      return (
        <ScrollView style={styles.container}>
          <Text>Grocery List</Text>
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e6fcff'
    }
  })