"use client";
import React, { useEffect, ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive");
    if (interBubble) {
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      const updateColor = (x: number) => {
        const hue = Math.floor((x / window.innerWidth) * 360);
        interBubble.style.background = `radial-gradient(circle at center, hsla(${hue}, 100%, 70%, 0.9) 0%, hsla(${hue}, 100%, 70%, 0.4) 70%)`;
        interBubble.style.boxShadow = `0 0 20px hsla(${hue}, 100%, 70%, 0.6)`;
      };

      const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
      };

      const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
        updateColor(event.clientX);
      };

      window.addEventListener("mousemove", handleMouseMove);
      move();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div>
      {/* SVG for the 'goo' effect */}
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

      {/* The background itself */}
      <div className="gradient-bg">
        <div className="relative z-10">{children}</div>
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

export default GradientBackground;