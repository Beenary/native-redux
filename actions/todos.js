export const ADD_TODO = 'ADD_TODO'
export const RECIVE_TODOS = 'RECIVE_TODO'

export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}