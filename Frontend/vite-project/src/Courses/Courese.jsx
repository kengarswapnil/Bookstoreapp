import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
// import { set } from "mongoose";


function Courese() {

  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>

      <Footer />
    </div>
  );
}

export default Courese;
