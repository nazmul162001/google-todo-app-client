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
      <h2 className="text-3xl text-center py-5">All Todo</h2>
      <div className="all-todo w-3/5 mx-auto">
        {todos.map((todo) => (
          <p>{todo.todoTask}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
