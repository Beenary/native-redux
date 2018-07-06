import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { handleInitialData } from "./actions/initialData";
import { addTodo } from "./actions/todos";


const Todo = (props) => (
  <View>
    <Text>{props.name}</Text>
  </View>
)


class Todos extends Component{

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  addItem = (e) => {
    const { dispatch } = this.props
    dispatch(addTodo({name:e, id: Math.floor((Math.random() * 10) + 1) }))
  }

  render(){
    const { todos } = this.props
    return(
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='transparent'
          style={{height: 36, backgroundColor: 'white', padding: 10, elevation: 5}}
          onSubmitEditing={({ nativeEvent }) => this.addItem(nativeEvent.text)}
        />
        {todos.map( todo => (
          <Todo key={todo.id} name={todo.name}/>
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