export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';
export const TOGGLE = 'TOGGLE_TODO';

export const addTodo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: todo.id,
      text: todo.text,
      done: todo.done,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE,
    id,
  };
};
