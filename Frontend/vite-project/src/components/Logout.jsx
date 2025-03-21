// import React from 'react'
// import toast from 'react-hot-toast';
// import {useAuth} from '../context/AuthProvider';
// function Logout() {

//   const [authUser,setAuthUser]=useAuth()
//   const handleLogout = ()=>
//   {
//     try{
//            setAuthUser({
//             ...authUser,
//             user:null
//            })
//            localStorage.removeItem("Users");
//            toast.success("Logout sucessfully");
//            document.getElementById("my_modal_3").close();
//            setTimeout(() => {
//              window.location.reload();
//              localStorage.setItem("Users", JSON.stringify(res.data.user));
//            }, 3000);

//     }catch(error)
//     {
//        toast.error("Error"+error.response.data.message)
//        setTimeout(()=>{},3000)
//     }
//   }

//   return (
//     <div>
//       <button className='px-2 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Logout
import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;