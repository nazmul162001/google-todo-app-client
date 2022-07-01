import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompletedTask = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    axios
      .get('https://serene-shelf-73574.herokuapp.com/api/user/?complete=true')
      .then((data) => setCompleted(data.data));
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl text-center py-5">This is my Completed</h2>
      <div className="completed-task w-full">
        {completed?.map((complete) => (
          <li className="w-3/5 mx-auto">{complete.todoTask}</li>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
