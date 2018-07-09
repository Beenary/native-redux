import API from 'goals-todos-api'

export const REVICE_INITAL_DATA = 'REVICE_INITAL_DATA'

function reciveInitialData(todos){
  return {
    type: REVICE_INITAL_DATA,
    todos
  }
}


// Para ocupar este de tipo de funcion, necesitamos ocupar middlewares. Estos permite agregar funciones personalizadas a redux.
// En este caso en particular ocupamos redux-thunk.
// Iniciamos la funcion handleInitialData para obtener los datos iniciales de la aplicación. 
// Esta informacion pasar al reducer todos.js, a travez del tipo de acción REVICE_INITAL_DATA.

export function handleInitialData () {
  return (dispatch) => {
    return API.fetchTodos().then((todos) => {
      dispatch(reciveInitialData(todos))
    })
  }
}