import React from 'react';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="text-5xl font-serif">☆*:.｡.꒰ঌToDoList꒱.｡.:*☆</div>
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
