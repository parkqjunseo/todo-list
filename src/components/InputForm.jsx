import { v4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../common/actions';

function InputForm() {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleClick = () => {
    const todo = {
      id: v4(),
      text: content,
      done: false,
    };

    dispatch(addTodo(todo));
    setContent('');
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="what is to do?"
        onChange={handleChange}
        value={content}
        onKeyDown={handleKeypress}
        className="font-medium border-b border-black focus:outline-none"
      />
      <button onClick={handleClick} type="submit" className="border px-2 py-1 rounded-full ml-5">
        •ܫ•
      </button>
    </div>
  );
}

export default InputForm;
