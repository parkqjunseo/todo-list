import React from 'react';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen border flex flex-col items-center pt-20 max-h-[90vw]">
      <div className="text-4xl font-medium">.｡:toDo･*.</div>
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
