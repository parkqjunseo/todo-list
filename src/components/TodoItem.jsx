import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { deleteTodo, toggleTodo } from '../common/actions';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const { id, text, done } = todo;

  const handleClick = () => {
    dispatch(deleteTodo(id));
  };

  const handleCheckboxChange = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="mt-5 flex border rounded-5 shadow-lg w-[20rem] justify-between items-center">
      <div className="flex items-center ml-4">
        {done ? (
          <MdCheckBox onClick={handleCheckboxChange} className="cursor-pointer h-5 w-5" />
        ) : (
          <MdCheckBoxOutlineBlank onClick={handleCheckboxChange} className="cursor-pointer h-5 w-5" />
        )}
        <span className="ml-3">{text}</span>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="mr-5 border h-5 w-5 text-red-400 flex items-center justify-center text-sm"
      >
        ❌
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TodoItem;
