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
    <div>
      <div className="check-box">
        {done ? (
          <MdCheckBox onClick={handleCheckboxChange} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={handleCheckboxChange} />
        )}
      </div>
      <span>{text}</span>
      <button onClick={handleClick} type="button">
        del
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
