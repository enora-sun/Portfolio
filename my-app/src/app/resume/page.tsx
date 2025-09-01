import React from "react";
import BackButton from "../../../components/BackButton";
import GradientBackground from "../../../components/GradientBackground";
import "./style.css";

const Resume = () => {
  return (
    <GradientBackground>
      <div className="font-mono flex flex-col items-center justify-center min-h-screen p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-lg max-w-2xl text-center">
          Space holder for my resume and contact info.
        </p>
        <br></br>
        <BackButton />
      </div>
    </GradientBackground>
  );
};

export default Resume;
