import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import "./App.css";
import { Home } from "./components/home";
import Login from "./components/Login";
import Register from "./components/Register";
import { About } from "./components/about";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  

  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
      {/*  */}
    </div>
  );
};

export default App;
