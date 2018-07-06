// Las acciones que creamos en este archivo serán ocupadas(en su mayoria) en los componentes de nuestra aplicacion
// Cada una de estas acciones se subscribe a redux a travez de la funcion 'dispatch'

// Constantes exportables para cada uno de los casos
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const RECIVE_TODOS = 'RECIVE_TODO'

// Las acciones retornan un typo de accion y un objeto
// En este caso, para tipo de accion ADD_TODO, queremos devolver el objeto 'todo'
// que pasa por el store modifcando la información
// Ejemplo: case ADD_TODO : return [...state, action.todo]

//Estas funciones se ocuparan en el componente Todos.js
export function addTodo(todo){
  return {
    type: ADD_TODO,
    todo
  }
}


export function removeTodo(id){
  return {
    type: REMOVE_TODO,
    id
  }
} 