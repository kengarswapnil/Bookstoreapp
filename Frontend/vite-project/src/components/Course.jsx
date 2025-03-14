import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className=" text-2xl md:text-4xl">
            We`re delighted to have you{" "}
            <span className="text-pink-500">Here:)</span>
          </h1>
          <p className="mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            saepe laborum voluptate exercitationem mollitia dicta facilis,
            doloremque et quo veritatis harum ea neque tempora numquam aliquid
            praesentium incidunt? Aliquam, asperiores.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300 mt-5">
              Back
            </button>
          </Link>  
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 py-10">
          {list.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
