import React from "react";
import Searchbox from "./Searchbox.jsx";
import "./container.css";
import Images from "./Images.jsx";

const Hero = () => {
  return (
    <>
      <div className="custom-container flex items-center justify-around gap-4 flex-wrap overflow-x-hidden">
        <div className="text-gray-600 w-1/2 mb-4 basis-[400px] ">
          <h1 className="text-4xl font-bold mt-4 mb-1 ms-1">
            HD Photos<span>🎉</span>
          </h1>
          <p className="ms-1">
            HD Photo is your ultimate destination for stunning, high-definition
            photography. Discover a curated collection of breathtaking images,
            perfect for personal or professional use, all crafted to inspire and
            elevate your visual projects.
          </p>
          <p className="mt-10 mb-1 ms-1">
            Find the perfect image effortlessly with our advanced search,
            designed to deliver stunning HD photos tailored to your needs.
          </p>
          {/* <Searchbox /> */}
        </div>
        <div className="w-1/2 flex justify-center">
          <video
            className="rounded-lg p-6 max-w-[400px]"
            src="hero_video.mp4"
            type="video/mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
      <div className="my-6">
        <Images />
      </div>
    </>
  );
};

export default Hero;
