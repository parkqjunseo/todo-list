import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'common/actions';

const InputForm = () => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleClick = () => {
    const todo = {
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
        placeholder="할 일이 먼데"
        onChange={handleChange}
        value={content}
        onKeyDown={handleKeypress}
      />
      <button onClick={handleClick} type="submit">
        +
      </button>
    </div>
  );
};

export default InputForm;
