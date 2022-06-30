import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";
import CompletedTask from "./components/CompletedTask/CompletedTask";
import Calender from "./components/Calender/Calender";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/complete" element={<CompletedTask />}></Route>
        <Route path="/calender" element={<Calender />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
