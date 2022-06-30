import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';

const TodoList = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="todo-list">
      <div className="todo-task bg-gray-300 flex justify-between items-center mt-2 rounded">
        <div className="p-3 flex items-center w-full">
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
          </label>
          <div className="task ml-2">
            My assesment
          </div>
        </div>
        <div className="action p-3 flex">
          <FaRegEdit className='text-xl hover:text-cyan-400 cursor-pointer' />
          <BsTrash className='mx-2 text-xl hover:text-red-500 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
