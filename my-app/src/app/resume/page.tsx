"use client";
import React from "react";
import BackButton from "../../../components/BackButton";
import GradientBackground from "../../../components/GradientBackground";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  // capture the form element synchronously
  const form = e.currentTarget;
  // don't call preventDefault(); we want the POST to FormSubmit
  window.setTimeout(() => form.reset(), 400);
};


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
            action="https://formsubmit.co/sunyinuo1120@gmail.com"
            method="POST"
            target="_blank"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit options (all hidden) */}
            <input
              type="hidden"
              name="_subject"
              value="Portfolio resume request"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Use a FULL URL for the thank-you redirect */}
            <input
              type="hidden"
              name="_next"
              value="https://enora-sun.github.io/Portfolio/thanks.html"
            />
            {/* (Optional) tell FormSubmit the exact page URL, helpful after domain changes */}
            <input
              type="hidden"
              name="_url"
              value="https://enora-sun.github.io/Portfolio/about"
            />

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
                  {/* make sure you keep a field named 'email' */}
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
                name="message"
                className="form-control"
                placeholder="Your Message"
                rows={10}
                required
              />
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
