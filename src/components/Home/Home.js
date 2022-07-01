import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://serene-shelf-73574.herokuapp.com/api/user')
      .then((res) => setTodos(res.data));
  }, [todos]);

  return (
    <div className="w-full">
      <h2 className="text-4xl text-gray-500 font-bold text-center py-5">All Todo</h2>
      <div className="all-todo w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <p className='p-3 bg-gray-300 m-1 rounded'>{todo.todoTask}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
