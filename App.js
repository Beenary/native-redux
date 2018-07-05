import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import reducer from "./reducers";


const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  }
}

class Todos extends Component{
  render(){
    return(
      <Text>adsasd</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
