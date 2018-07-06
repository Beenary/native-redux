import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from "react-redux";

const Todo = (props) => (
  <View>
    <Text>{props.name}</Text>
  </View>
)

class Goals extends Component{
  render(){
    const { todos } = this.props
    return(
      <View style={styles.container}>
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

export default connect(mapStateToprops)(Goals)

