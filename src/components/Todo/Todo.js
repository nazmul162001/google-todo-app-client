import React from 'react';
import './Todo.css';

const Todo = () => {
  return (
    <div className="todo-app w-full">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-gray-500 py-5">
        Add Your Daily To-Do Task
      </h2>
      <form className="todo-input w-3/5 mx-auto max-w-full p-3 flex justify-center items-center">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="todo-input"
          type="text"
          placeholder="write your todo"
        />
        <input type="submit" value="+" className='px-2 py-1 rounded ml-2 text-2xl bg-cyan-400' />
      </form>
    </div>
  );
};

export default Todo;
