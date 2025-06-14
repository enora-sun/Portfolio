// https://github.com/baunov/gradients-bg
"use client";
import React, { useEffect } from "react";
import BackButton from "../../../components/BackButton";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import useFairyMusic from "@/hooks/useFairyMusic";
import Typewriter from "react-ts-typewriter";

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

        <div className="relative z-100 w-full px-12 min-h-screen flex items-center justify-center">
          <div className="flex flex-row items-start gap-x-12">
            {/* LEFT TEXT */}
            <div className="w-2/3 text-white font-mono">
              <div className="flex flex-col justify-start items-center text-center">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg max-w-2xl mb-6">
                  <Typewriter text="My name is Enora, a Computer Science student at UBC." />
                  <br />I enjoy projects that promote{" "}
                  <span className="font-bold">social good</span> in tech.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Fun Facts</h2>
                <ul className="list-disc text-left text-lg ml-6">
                  <li>
                    🌟 I have a twelve year old iPod that still works
                    <br></br>&nbsp;&nbsp;&nbsp;(barely).
                  </li>
                  <li>
                    🎨 If I can talk with any philosopher in the world,
                    <br></br>&nbsp;&nbsp;&nbsp;I would pick Michel Foucault.
                  </li>
                  <li>🎮 Merry is my favorite Animal Crossing character.</li>
                </ul>

                <div className="mt-6">
                  <BackButton />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-1/3 flex items-start">
              <Image
                src="/images/me.PNG"
                alt="Enora"
                width={300}
                height={300}
                className="custom-photo object-cover w-full h-full transition duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
