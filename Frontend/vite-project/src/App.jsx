import React from "react";
import Home from "./home/Home";
import Course from "./components/Course";
import { Navigate, Route, Routes } from "react-router-dom";
import Courese from "./Courses/Courese";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";  // ✅ Import the hook


function App() {

  const [authUser,setAuthUser]=useAuth()
  
  
  return (
    <>
      {/* <Home/>
   <Course/> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={authUser?<Courese />:<Navigate to="/signup"/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
      <Toaster/>
    </>
  );
}

export default App;
// import React from "react";
// import Home from "./home/Home";
// import Course from "./components/Course";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courese from "./Courses/Courese";
// import Signup from "./components/Signup";
// import { Toaster } from "react-hot-toast";
// import { AuthContext } from "./context/AuthProvider";  // Import the context

// function App() {
//   return (
//     <AuthContext.Consumer>
//       {([authUser]) => (
//         <>
//           <div className="dark:bg-slate-900 dark:text-white">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route
//                 path="/course"
//                 element={authUser ? <Courese /> : <Navigate to="/signup" />}
//               />
//               <Route path="/signup" element={<Signup />} />
//             </Routes>
//           </div>
//           <Toaster />
//         </>
//       )}
//     </AuthContext.Consumer>
//   );
// }

// export default App;
