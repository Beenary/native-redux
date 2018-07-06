import React, { Component } from 'react';

// Ocupamos Provider para encapsular la aplicacion
import { Provider } from 'react-redux'

// Create store en una funcion que crea un store nuevo, que contiene los states de la aplicacion
// Esta funcion se le pasan dos argumentos. El primero es/son los reducer(s) y como segundo argumento middleware(s)
import { createStore } from 'redux'

// Ocupamos un middleware, este caso thunk, que perimte funciones personalizdas en reudx
// Ejemplo en archivo initialData.js de la carpeta actions. Funcion handleInitialData
import middleware from './middleware'

// Reducidores, estos deben pasarse como primer argumaento en la funcion createStore()
import reducer from "./reducers/todos";

import Todos from './components/Todos'
import { createBottomTabNavigator } from "react-navigation";
import Goals from './components/Goals';


// Asignamos la funcion createStore a la constante store, pasan como parametors los reducidores y middlewares
const store = createStore(reducer, middleware)

export default class App extends Component {

  render() {
    return (
      // Al componente provider se le debe pasar el store como props
      // Otros ejemplos podrias ser:
      // <Provider store={createStore(reducer, middleware)}></Provider>
      
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

