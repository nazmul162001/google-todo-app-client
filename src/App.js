import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Todo from './components/Todo/Todo';
import CompletedTask from './components/CompletedTask/CompletedTask';
import Calender from './components/Calender/Calender';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-route">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/complete" element={<CompletedTask />}></Route>
            <Route path="/calender" element={<Calender />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
