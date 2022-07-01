import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './Todo.css';
import swal from 'sweetalert';
import UpdateModal from '../UpdateModal/UpdateModal';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [updatedModeId, setUpdatedModeId] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [update, setUpdate] = useState("");
  // getting todo from server
  useEffect(() => {
    axios
      .get('https://serene-shelf-73574.herokuapp.com/api/user')
      .then((res) => setTodos(res.data));
  }, [todos]);

  // handle change
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // handle submit task
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    // send data to backend
    await axios.post('https://serene-shelf-73574.herokuapp.com/api/user', {
      todoTask: value,
    });
    setValue('');
  };

  //it triggers by pressing the enter key
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  // handle delete todo
  const handleDeleteTodo = async (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete this todos?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        swal('Successfully deleted your todos', {
          icon: 'success',
        });
        await axios.delete(
          `https://serene-shelf-73574.herokuapp.com/api/user/${id}`
        );
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };


   // update
   const handleUpdateTodo =async (id) => {
    setUpdatedModeId(id)
    setShowModal(true)
  }

  return (
    <div className="todo-app w-full">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-500 py-5">
        Add Your Daily To-Do Task
      </h2>
      <form className="todo w-full px-4 md:px-0 md:w-3/5 mx-auto max-w-full">
        <div className="todo-input flex justify-center items-center p-3">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo-input"
            type="text"
            name="todo"
            placeholder="write your todo"
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="px-2 py-1 rounded ml-2 text-2xl bg-cyan-400 cursor-pointer"
          >
          Add
          </button>
        </div>
      </form>
      <div className="get-todo w-full px-4 md:px-0 md:w-3/5 mx-auto">
      {todos.map((todo, index) => (
          <TodoList
            key={index}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))}
      </div>
      {showModal ? <UpdateModal updatedModeId={updatedModeId} setShowModal ={setShowModal}/> : null}
    </div>
  );
};

export default Todo;
