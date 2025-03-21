import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2*1 container md:px-20 flex flex-col  md:flex-row px-4 my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2  mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello,Welcome here to learn somthing{" "}
              <span className="text-pink-500">new everyday!!!</span>{" "}
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda temporibus omnis velit aut excepturi doloribus, quia
              error. Consequatur nisi reprehenderit esse quia! Quos aperiam vero
              consequuntur soluta amet, placeat totam!
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <div className=" order-1 w-full md:w-1/2">
          {" "}
          <img src="banner.jpg" className="w-92 h-92" alt=""></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
