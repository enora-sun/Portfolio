import React from "react";
import BackButton from "../../../components/BackButton";
import ProjectCard from "../../../components/ProjectCard";
import GradientBackground from "../../../components/GradientBackground";
import "./style.css";

const projects = [
  {
    image: "/img/portfolio/toyota/connected-services-plans.webp",
    title: "Leadership Performance Conversation Simulator",
    description: "A redesigned section for Toyota’s website to improve UX.",
    link: "projects/toyota-product-redesign.html",
  },
  {
    image: "/img/portfolio/swell/swell-home.webp",
    title: "Swell Marketing Redesign",
    description: "A website design created for a headless eCommerce startup.",
    link: "projects/swell-marketing-redesign.html",
  },
  {
    image: "/img/portfolio/console/console-preview.webp",
    title: "Console Product Design",
    description: "A UI/UX revamp for a home gardening startup.",
    link: "projects/console-product-design.html",
  },
  {
    image: "/img/portfolio/console/console-preview.webp",
    title: "Console Product Design",
    description: "A UI/UX revamp for a home gardening startup.",
    link: "projects/console-product-design.html",
  },
  {
    image: "/img/portfolio/console/console-preview.webp",
    title: "Console Product Design",
    description: "A UI/UX revamp for a home gardening startup.",
    link: "projects/console-product-design.html",
  },
  {
    image: "/img/portfolio/console/console-preview.webp",
    title: "Console Product Design",
    description: "A UI/UX revamp for a home gardening startup.",
    link: "projects/console-product-design.html",
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
