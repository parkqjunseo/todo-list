import { ADD, DELETE, TOGGLE } from './actions';

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)),
      };

    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };

    default:
      return state;
  }
};
