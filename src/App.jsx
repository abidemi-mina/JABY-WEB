import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import JsonData from './data/data.json'
import "./App.css";
import { Home } from "./components/home";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";
import { useEffect } from "react";
import Detail from "./components/Detail";



// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = (Beginners,Intermediate) => {
  const [data,setData]= useState({})
  const [lang,setLang]= useState({})
  useEffect(() => {
    setData(JsonData);
    setLang(JsonData.ProgrammingLanguages);
  }, []);
  console.log(lang);
  

  
  

  
// console.log(JsonData["Programming-Languages"].Beginners);
  return (
    <div>
      <Navigation data={data.ProgrammingLanguages} />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register  data={data.Country}/>}/>
        <Route path='/Course/:name' element={<Detail begin={lang.Beginners} intern={lang.Intermediate} advance={lang.Advanced}/>}/>
        
      </Routes>
      

      
      {/*  */}
    </div>
  );
};

export default App;
