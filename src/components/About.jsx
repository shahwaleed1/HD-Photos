import React from "react";

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
        <div className="flex items-center flex-col text-justify max-w-[35rem] m-3">
          <img src="logo.png" alt="HD Photo logo" style={imgStyle} />
          <h2 style={heading}>HD Photos</h2>
          <p className="text-slate-600">
            HD Photos is a sleek and responsive web application built by Waleed,
            a skilled full-stack developer. This platform offers a seamless
            browsing experience for discovering and downloading high-quality,
            stunning images. Powered by modern web technologies, it showcases
            Waleed's expertise in creating visually appealing and
            performance-optimized applications.
          </p>
        </div>
        <div className="flex items-center text-justify flex-col max-w-[35rem] m-3">
          <img src="profile_pic.png" alt="" style={imgStyle} />
          <h2 style={heading}>Website Developer</h2>
          <p className="text-slate-600">
            Waleed is a talented and innovative full-stack developer with
            expertise in crafting dynamic, user-friendly web applications.
            Proficient in the MERN stack, he brings ideas to life with clean
            code and modern design principles. Waleed’s passion for
            problem-solving and attention to detail make him a go-to
            professional for building scalable and impactful digital solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
