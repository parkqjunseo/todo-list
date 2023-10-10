export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';
export const TOGGLE = 'TOGGLE_TODO';

let prevId = 0;

export const addTodo = (todo) => {
  prevId += 1;
  return {
    type: ADD,
    todo: {
      id: prevId,
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
