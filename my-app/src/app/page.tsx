import Link from "next/link";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col relative overflow-hidden">
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
              <span className="transition-colors duration-300">{page.charAt(0).toUpperCase() + page.slice(1)}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Centered Page Content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center flex-grow z-10">
        <h1 className="text-9xl font-bold font-fancy text-transparent bg-clip-text bg-gradient-to-br from-black/90 to-black/40 opacity-0 translate-y-4 animate-fade-in">Enora Sun</h1>
        <p className="text-3xl mt-4 font-mono animate-fade-in">Welcome to my portfolio!</p>
      </div>
    </div>
  );
}