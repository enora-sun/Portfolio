"use client";
import Link from "next/link";
import Image from "next/image";
import useFairyMusic from "@/hooks/useFairyMusic";

export default function Home() {
  const { isPlaying, handleClick } = useFairyMusic();
  return (
    <div className="min-h-screen relative overflow-visible flex flex-col">
      {" "}
      {/* 1. Make parent a flex column */}
      {/* Glowing Rotating Blob Background */}
      {/* Ensure blob is truly in the background and doesn't interfere with layout flow */}
      <div className="blob-outer-container fixed inset-0 z-[-1]">
        {" "}
        {/* 2. Position blob fixed and behind */}
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
      {/* Top Navigation Bar */}
      <nav className="flex justify-between p-5 z-20">
        {" "}
        {/* 3. Nav needs a z-index above blob */}
        <div className="flex justify-between w-full max-w-6xl mx-auto">
          {["about", "project", "resume"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="relative group text-black text-2xl font-bold font-mono"
            >
              <span className="transition-colors duration-300">
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Main Content Area: This will grow and center its children */}
      <main className="flex-grow flex flex-col items-center justify-center z-10">
        {" "}
        {/* 4. Key centering container */}
        {/* Title + Fairy Container */}
        {/* This div groups the title and fairy, and we'll add margin-bottom for space before description */}
        <div className="relative mb-6">
          {" "}
          {/* 5. Adjust mb-6 (margin-bottom) as needed for space */}
          <h1
            className="font-boheme text-9xl font-bold leading-relaxed overflow-x-visible 
                   text-transparent bg-clip-text bg-gradient-to-br from-black/90 to-black/40 
                   opacity-0 animate-fade-in antialiased px-9"
          >
            Enora Sun
          </h1>
          <Image
            src="/images/fairy1.PNG"
            alt="Decorative"
            width={250}
            height={250}
            onClick={handleClick}
            className="absolute animate-fade-in"
            style={{ left: "-27%", top: "-75%" }} // You might need to fine-tune these
          />
        </div>
        {/* Description block - directly follows the title block */}
        <div className="flex flex-col items-center space-y-2 text-center">
          {" "}
          {/* 6. Removed mt-10 */}
          <p className="text-3xl font-mono animate-fade-in">
            Welcome to my portfolio!
          </p>
          <p className="text-2xl font-mono animate-fade-in">
            Click the fairies once for music to start.
          </p>
          <p className="text-2xl font-mono animate-fade-in">Once to pause.</p>
          <p className="text-2xl font-mono animate-fade-in">
            Twice to skip to next song.
          </p>
          <p
            className={`text-2xl font-mono transition-opacity duration-500 ${
              isPlaying ? "glow-text opacity-100" : "opacity-0"
            }`}
          >
            Enjoy!
          </p>
        </div>
      </main>
      {/* Removed the outer 'pointer-events-none inset-0 absolute z-12' div as its role is now split
      between the fixed blob background and the main content centering container.
      If you had other absolute elements within it, they might need repositioning. */}
    </div>
  );
}
