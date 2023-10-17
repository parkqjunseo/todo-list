import React from 'react';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen border flex flex-col items-center pt-20 max-h-[90vw] bg-black">
      <TodoList />
      <InputForm />
    </div>
  );
}

export default App;
