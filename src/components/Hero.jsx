import React from "react";
import Searchbox from "./Searchbox.jsx";
import "./container.css";

const Hero = () => {
  return (
    <>
      <div className="custom-container flex items-center gap-8 flex-wrap-reverse">
        <div className="text-gray-600 w-1/2 flex-1 mb-4">
          <h1 className="text-4xl font-bold ms-10  mt-4 mb-1 ">
            HD Photos<span>🎉</span>
          </h1>
          <p className="ms-10">
            HD Photo is your ultimate destination for stunning, high-definition
            photography. Discover a curated collection of breathtaking images,
            perfect for personal or professional use, all crafted to inspire and
            elevate your visual projects.
          </p>
          <p className="ms-10 mt-10 mb-1">
            Find the perfect image effortlessly with our advanced search,
            designed to deliver stunning HD photos tailored to your needs.
          </p>
          <Searchbox />
        </div>
        <div className="w-1/2 flex items-center">
          <video
            className="rounded-lg p-4"
            width={400}
            src="hero_video.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
    </>
  );
};

export default Hero;
