import React, { useState } from 'react';
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import UpdateModal from '../UpdateModal/UpdateModal';

const TodoList = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const { todoTask, _id, complete } = todo;
  const [checked, setChecked] = useState(complete);

  const handleCompleteTask = () => {
    axios.put(`http://localhost:5000/api/user/${_id}`,{
      complete: complete ? false : true 
    })
  }
  
  return (
    <div className="todo-list">
      <div className="todo-task bg-gray-300 flex justify-between items-center mt-2 rounded">
        <div className="p-3 flex items-center w-full">
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={handleCompleteTask}
            />
          </label>
          <div className="task ml-2">{todoTask}</div>
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
      {/* <UpdateModal /> */}
    </div>
  );
};

export default TodoList;
