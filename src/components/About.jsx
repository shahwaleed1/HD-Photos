import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const imgStyle = {
    width: "15rem",
    borderRadius: "100%",
    border: "0.3rem solid #f8fafc",
    padding: "3",
    boxShadow: "0 5px 20px #cbd5e1",
  };
  const heading = {
    fontSize: "1.8rem",
    alignContent: "center",
    fontWeight: "600",
    color: "#475569",
  };

  return (
    <>
      <div className="flex items-center justify-around flex-wrap gap-12 my-8">
        <motion.div
          className="flex items-center flex-col text-justify max-w-[35rem] m-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="logo.png"
            alt="HD Photo logo"
            style={imgStyle}
            className="transition duration-700 ease-in-out hover:scale-105 hover:rotate-6"
          />
          <h2 style={heading}>HD Photos</h2>
          <p className="text-slate-600">
            HD Photos is a sleek and responsive web application built by Waleed,
            a skilled full-stack developer. This platform offers a seamless
            browsing experience for discovering and downloading high-quality,
            stunning images. Powered by modern web technologies, it showcases
            Waleed's expertise in creating visually appealing and
            performance-optimized applications.
          </p>
        </motion.div>
        <motion.div
          className="flex items-center text-justify flex-col max-w-[35rem] m-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="profile_pic.png"
            alt=""
            style={imgStyle}
            className="transition duration-700 ease-in-out hover:scale-105 hover:rotate-6"
          />
          <h2 style={heading}>Website Developer</h2>
          <p className="text-slate-600">
            Waleed is a talented and innovative full-stack developer with
            expertise in crafting dynamic, user-friendly web applications.
            Proficient in the MERN stack, he brings ideas to life with clean
            code and modern design principles. Waleed’s passion for
            problem-solving and attention to detail make him a go-to
            professional for building scalable and impactful digital solutions.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
