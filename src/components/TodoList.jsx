import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="mr-auto ml-auto">
      {todos.map((todo) => (
        <div className="mt-4">
          <TodoItem key={todo.id} todo={todo} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
