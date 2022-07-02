import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompletedTask from '../CompletedTask/CompletedTask';
import { GoArrowSmallRight } from 'react-icons/go'

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    axios
      .get('https://serene-shelf-73574.herokuapp.com/api/user')
      .then((res) => setTodos(res.data));
  }, [todos]);

  return (
    <div className="w-full px-4 md:px-0 text-center">
      <h2 className="text-4xl text-gray-500 font-bold text-center py-5">All Todo</h2>
      <div className="all-todo w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <p className='py-3 bg-gray-300 m-1 rounded flex justify-center items-center'> <GoArrowSmallRight className='font-bold text-2xl' /> {todo.todoTask}</p>
        ))}
      </div>
      <CompletedTask />
    </div>
  );
};

export default Home;
