import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './Todo.css';

const Todo = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    // send data to backend
  };

  //it triggers by pressing the enter key
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

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
            +
          </button>
        </div>
        <TodoList />
      </form>
    </div>
  );
};

export default Todo;
