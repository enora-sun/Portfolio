import React from "react";
import BackButton from "../../../components/BackButton";
import ProjectCard from "../../../components/ProjectCard";
import GradientBackground from "../../../components/GradientBackground";
import "./style.css";

const projects = [
  {
    image: "/images/1flower.PNG",
    title: "KPA Conversation Simulator",
    description: "An interactive web app that simulates performance conversations, enabling users to practice with AI-driven personas (pre-made or custom-generated via Gemini 1.5 Pro) and receive either real-time coaching or post-conversation feedback, with transcripts downloadable for review.",
    link: "https://drive.google.com/file/d/1zoNYtzOqPZmxtZS4wWzfAR6hmNUESIhH/view?usp=sharing",
  },
  {
    image: "/images/2flowers.PNG",
    title: "Tiny Home",
    description: "Portfolio website for lab in UBC Civil Engineering on addressing housing insecurity in Oakland, California. Developed with Streamlit to host interactive map with PyDeck, OpenStreetMap API and water solution stimulation model in frontend, Python for backend and Supabase for storing user-submitted water quality data.",
    link: "https://github.com/SonjiaD/tinyhome-backend",
  },
  {
    image: "/images/1reverseFlower.PNG",
    title: "Multi-Channel Network Database",
    description: "Full-stack database web application using OracleDB, featuring RESTful API endpoints for CRUD operations, filtering, projection and analytical SQL queries (JOIN, GROUP BY, nested aggregation, division) for 20+ relational schema.",
    link: "https://github.com/enora-sun/Multi-Channel-Network-Database",
  },
  {
    image: "/images/sun.PNG",
    title: "Flock",
    description: "Full-stack mobile app developed using Expo (React Native) for frontend and Flask (Python) for backend, with pre-trained ResNet50 & PyTorch ML model for image recognition, designed for user to upload and browse outdoor photos.",
    link: "https://github.com/lattellie/2025-youcode",
  },
  {
    image: "/images/star-plant.PNG",
    title: "StudyHive",
    description: "A full-stack chat-room web app for UBC students to form study groups and share materials—designed a Node.js/Express/SQLite REST API with JWT + bcrypt, CORS, and auth middleware, and shipped a responsive React + Quill.js + Tailwind UI with theme detection, group management, rich-text chat, and user auth flows.",
    link: "https://github.com/Malinovka/StudyGroups",
  },
  {
    image: "/images/reverseSun.PNG",
    title: "Magibook",
    description: "A multilingual children’s story generation web app for language learning—built a React front end with user auth, routing, and keyword-based inputs, and engineered a Node.js/Express API integrating GPT-4 and DALL·E to automate interactive educational content creation.",
    link: "https://github.com/enora-sun/MagiBook",
  },
];

const Project = () => {
  return (
    <GradientBackground>
    <div className="font-mono flex flex-col items-center justify-center min-h-screen p-6 text-white">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg max-w-2xl text-center">
        Checkout my work here!
      </p>

      {/* Project List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <br></br>
      <BackButton />
    </div>
    </GradientBackground>
  );
};

export default Project;
