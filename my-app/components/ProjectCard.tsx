"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ image, title, description, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="font-mono relative bg-gray-600/70 text-white rounded-lg shadow-lg overflow-hidden w-[400px]">
      {/* Image Container */}
      <div
        className="relative h-[250px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-auto object-cover"
          initial={{ y: 0 }}
          animate={isHovered ? { y: "-30%" } : { y: 0 }} // Scrolls up 30% when hovered
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Project Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-2 inline-block text-blue-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
