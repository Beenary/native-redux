import { ADD_TODO, REMOVE_TODO } from "../actions/todos";
import { REVICE_INITAL_DATA } from "../actions/initialData";

export default function todos (state = [], action) {
  switch(action.type) {
    case ADD_TODO :
      return [...state, action.todo]

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case REVICE_INITAL_DATA :
      return [...state, ...action.todos]

    default :
      return state
  }
}