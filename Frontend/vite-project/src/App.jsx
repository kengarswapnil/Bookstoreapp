import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import {Route,Routes} from "react-router-dom"
import Courese from "./Courses/Courese";
import Signup from "./components/Signup";


function App() {
  return (
   <>
   {/* <Home/>
   <Course/> */}
<div className="dark:bg-slate-900 dark:text-white">
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Courese/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    
   </Routes>
   
</div>
  
    
    </>
  );
}

export default App;
