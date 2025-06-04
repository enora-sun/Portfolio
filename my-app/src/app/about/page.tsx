// https://github.com/baunov/gradients-bg
"use client";
import React, { useEffect } from "react";
import BackButton from "../../../components/BackButton";
import "./style.css";

const About = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
      const interBubble =
        document.querySelector<HTMLDivElement>(".interactive");
      if (!interBubble) return;

      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const updateColor = (x: number) => {
        const hue = Math.floor((x / window.innerWidth) * 360);
        interBubble.style.background = `radial-gradient(circle at center, hsla(${hue}, 100%, 70%, 0.9) 0%, hsla(${hue}, 100%, 70%, 0.4) 70%)`;
        interBubble.style.boxShadow = `0 0 20px hsla(${hue}, 100%, 70%, 0.6)`;
      };

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      }

      const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
        updateColor(event.clientX);
        console.log("Mouse:", tgX, tgY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      move();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  return (
    <div>
      <div className="text-container ">
        <div className="font-mono flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg  max-w-2xl text-center">
            Hi! My name is Enora, a Computer Science student at UBC. I love
            building projects that promote <span className="font-bold">gender equality</span> in tech and
            exploring innovative ways to use <span className="font-bold">technology for social good</span>.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-center">
              {" "}
              Fun Facts
            </h2>
            <ul className="mt-2 list-disc">
              <li>
                🌟 I have a twelve year old ipod that still works (barely).
              </li>
              <li>
                🎨 If I could talk to one philosopher, I would chose Michel
                Foucault.
              </li>
              <li>🎮 Merry is my favorite Animal Crossing character. </li>
            </ul>
          </div>
          <br></br>
          <BackButton />
        </div>
        ;
      </div>
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
          1 0 0 0 0  
          0 1 0 0 0  
          0 0 1 0 0  
          0 0 0 70 -35"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      <div className="gradient-bg">
        <div className="gradient-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
          <div className="g6" />
          <div className="interactive" />
        </div>
      </div>
    </div>
  );
};

export default About;

<div className="font-mono flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
  <h1 className="text-4xl text-sky-400 font-bold mb-4">About Me</h1>
  <p className="text-lg text-gray-700 max-w-2xl text-center">
    Hi! My name is Enora, a Computer Science student at UBC. I love building
    projects that promote **gender equality** in tech and exploring innovative
    ways to use **technology for social good**.
  </p>

  <div className="mt-6">
    <h2 className="text-2xl text-sky-400 font-semibold text-center">
      {" "}
      Fun Facts
    </h2>
    <ul className="mt-2 list-disc text-gray-600">
      <li>🌟 I have a twelve year old ipod that still works (barely).</li>
      <li>
        🎨 If I could talk to one philosopher, I would chose Michel Foucault.
      </li>
      <li>🎮 Merry is my favorite Animal Crossing character. </li>
    </ul>
  </div>
  <br></br>
  <BackButton />
</div>;
