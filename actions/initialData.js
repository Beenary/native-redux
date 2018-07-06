import API from 'goals-todos-api'

export const REVICE_INITAL_DATA = 'REVICE_INITAL_DATA'

function reciveInitialData(todos){
  return {
    type: REVICE_INITAL_DATA,
    todos
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return API.fetchTodos().then((todos) => {
      dispatch(reciveInitialData(todos))
    })
  }
}