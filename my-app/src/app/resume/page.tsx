"use client";
import React from "react";
import BackButton from "../../../components/BackButton";
import GradientBackground from "../../../components/GradientBackground";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <GradientBackground>
      <div className="font-mono flex flex-col items-center justify-center min-h-screen p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">My Contact Info</h1>
        <br></br>
        <div className="flex gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/enora-sun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaGithub size={40} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yinuo-sun-022063326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <br></br>
        <div className="container">
          <h1>Email me for a copy of my resume!</h1>
          <form
            target="_blank"
            action="https://formsubmit.co/sunyinuo1120@gmail.com"
            method="POST"
            onSubmit={(e) => {
              // reset the form right away
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows={10}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              Submit Form
            </button>
          </form>
        </div>
        <br></br>
        <br></br>
        <BackButton />
      </div>
    </GradientBackground>
  );
};

export default Resume;
