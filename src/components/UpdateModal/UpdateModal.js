import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ updatedModeId, setShowModal }) => {
  const [updatedTask, setUpdatedTask] = useState('');

  useEffect(() => {
    axios
      .get(`https://serene-shelf-73574.herokuapp.com/api/user/${updatedModeId}`)
      .then((data) => setUpdatedTask(data.data[0].todoTask));
  }, [updatedModeId]);

  const handleUpdatedTodos = async () => {
    axios.put(
      `https://serene-shelf-73574.herokuapp.com/api/user/${updatedModeId}`,
      {
        todoTask: updatedTask,
      }
    );
    setShowModal(false);
  };


  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <div className="update-form flex mt-6">
            <input
              onChange={(e) => setUpdatedTask(e.target.value)}
              value={updatedTask}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="todo-input"
              type="text"
              name="todo"
              placeholder="update your todo"
            />
            <button
              onClick={handleUpdatedTodos}
              type="submit"
              className="px-2 py-1 rounded ml-2 text-2xl bg-cyan-400 cursor-pointer"
            >
              Update
            </button>
          </div>
          <div class="modal-action">
            <label
              for="my-modal-6"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
