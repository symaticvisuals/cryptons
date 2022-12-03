import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

function NoPageFound() {
  const naviagte = useNavigate();
  return (
    <div className="p-7 h-full overflow-y-scroll">
      <section className="bg-white flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 font-sans">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              {`Something's missing.`}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              {` Sorry, we can't find that page. You'll find lots to explore on the
              home page.`}
            </p>
            <button
              onClick={() => {
                Cookies.get("token") ? naviagte("/") : naviagte("/login");
              }}
              href="/login"
              className="inline-flex text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              {Cookies.get("token") ? `Back to Home` : `Back to Login`}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoPageFound;
