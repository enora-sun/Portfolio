import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-visible">
      {/* Glowing Rotating Blob Background */}
      <div className="blob-outer-container">
        <div className="blob-inner-container">
          <div className="blob"></div>
        </div>
      </div>
      {/* Top Navigation Bar */}
      <nav className="flex justify-between p-5">
        <div className="flex justify-between w-full max-w-6xl mx-auto">
          {["about", "project", "resume"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="relative group text-black text-2xl font-mono font-extralight"
            >
              <span className="transition-colors duration-300">
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Centered Page Content */}
      <div
        className="pointer-events-none 
      inset-0 flex flex-col items-center justify-center z-12 absolute"
      >
        <div className="relative">
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
            className="absolute animate-fade-in"
            style={{ left: "-27%", top: "-75%" }}
          />
        </div>
        <p className="text-3xl mt-4 font-mono animate-fade-in">
          Welcome to my portfolio!
        </p>
      </div>
    </div>
  );
}