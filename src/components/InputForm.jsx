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
    <div>
      <input
        type="text"
        placeholder="what is to do?"
        onChange={handleChange}
        value={content}
        onKeyDown={handleKeypress}
      />
      <button onClick={handleClick} type="submit">
        (⁻꒫⁻)
      </button>
    </div>
  );
}

export default InputForm;
