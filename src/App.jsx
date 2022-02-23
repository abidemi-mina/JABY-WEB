import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import JsonData from './data/data.json'
import "./App.css";
import { Home } from "./components/home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import { useEffect } from "react";
import Detail from "./components/details";
import test from "./components/test";
import Test from "./components/test";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  const [data,setData]= useState({})
  useEffect(() => {
    setData(JsonData);
  }, []);

  
// console.log(JsonData["Programming-Languages"].Beginners);
  return (
    <div>
      <Navigation data={data.ProgrammingLanguages} />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register  data={data.Country}/>}/>
        <Route path='/Course' element={<Detail/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
      

      
      {/*  */}
    </div>
  );
};

export default App;
