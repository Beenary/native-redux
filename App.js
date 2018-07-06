import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from "./reducers/todos";
import Todos from './Todos'
import middleware from './middleware'
import { createBottomTabNavigator } from "react-navigation";
import Goals from './components/Goals';

const store = createStore(reducer, middleware)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

const Tabs = createBottomTabNavigator({
  Todos: {
    screen: Todos
  },
  Goals: {
    screen: Goals,
  },
})

