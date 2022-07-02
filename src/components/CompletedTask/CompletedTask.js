import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GiCheckMark } from 'react-icons/gi'

const CompletedTask = () => {
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    axios
      .get('https://serene-shelf-73574.herokuapp.com/api/user/?complete=true')
      .then((data) => setCompleted(data.data));
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-4xl text-center py-5 text-gray-500 font-bold">Completed Task</h2>
      <div className="completed-task w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {completed?.map((complete) => (
          <li className="w-full md:w-4/5 rounded mx-auto bg-gray-300 m-1 p-3 list-none flex justify-center items-center"><GiCheckMark className='mr-2' /> {complete.todoTask}</li>
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
