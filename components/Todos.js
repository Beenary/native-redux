import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

// importamos las acciones que necesita el componente
// Como primera funcion tenemos el consumo de los datos iniciales.
import { handleInitialData } from "../actions/initialData";
import { addTodo, removeTodo } from "../actions/todos";


const Todo = (props) => (
  <View>
    <Text>{props.name}</Text>
    <Text>{props.id}</Text>
    <Button
      onPress={() => props.remove(props.id)}
      title="Delete"
      color="#841584"/>
  </View>
)


class Todos extends Component{

  componentDidMount(){
    // Al estar conectado al store, el component adquiere la funcion dispatch como props.
    const { dispatch } = this.props
    // Ejecutamos dispatch y pasamos como parametros nuestra accion.
    dispatch(handleInitialData())
  }

  addItem = (e) => {
    const { dispatch } = this.props
    // Ejecutamos dispatch y pasamos como parametros nuestra accion.
    dispatch(addTodo(
      {name:e, id: Math.floor((Math.random() * 10) + 1)}
    ))
  }

  removeItem = (id) => {
    const { dispatch } = this.props
    // Ejecutamos dispatch y pasamos como parametros nuestra accion.
    dispatch(removeTodo(id))
  }

  render(){
    const { todos } = this.props
    return(
      <View style={styles.container}>
        <TextInput
          ref="todo"
          underlineColorAndroid='transparent'
          style={{height: 36, backgroundColor: 'white', padding: 10, elevation: 5}}
          clearButtonMode="always"
          onSubmitEditing={({ nativeEvent }) => {this.addItem(nativeEvent.text), this.refs.todo.clear()}}
        />
        {todos.map( todo => (
          <Todo key={todo.id} remove={this.removeItem} {...todo}/>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 30
  },
});

function mapStateToprops(state){
  return{
    todos: state
  }
}

export default connect(mapStateToprops)(Todos)