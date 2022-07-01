import React, { useState } from 'react';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

const TodoList = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const { todoTask, _id, complete } = todo;
  const [checked, setChecked] = useState(complete);

  const handleCompleteTask = () => {
    axios.put(`https://serene-shelf-73574.herokuapp.com/api/user/${_id}`, {
      complete: complete ? false : true,
    });
  };

  return (
    <div className="todo-list">
      <div className="todo-task bg-gray-300 flex justify-between items-center mt-2 rounded">
        <div className="p-3 flex items-center w-full">
          <label>
            <input
              className='checkbox'
              type="checkbox"
              defaultChecked={checked}
              onChange={handleCompleteTask}
            />
          </label>
          {complete ? (
            <div className="task ml-2">
              <del>{todoTask}</del>{' '}
            </div>
          ) : (
            <div className="task ml-2">
              <span>{todoTask}</span>{' '}
            </div>
          )}
        </div>
        <div className="action p-3 flex">
          <label
            onClick={() => handleUpdateTodo(_id)}
            for="my-modal-6"
            class="text-xl hover:text-cyan-400 cursor-pointer"
          >
            <FaRegEdit className="text-xl hover:text-cyan-400 cursor-pointer" />
          </label>

          <BsTrash
            onClick={() => handleDeleteTodo(_id)}
            className="mx-2 text-xl hover:text-red-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
