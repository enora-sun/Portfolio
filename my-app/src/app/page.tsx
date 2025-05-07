import Link from "next/link";

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between p-4">
      <div className="flex justify-between w-full max-w-6xl mx-auto">
          {["about", "project", "resume"].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className="relative group text-black"
            >
              <span className="transition-colors duration-300">{page.charAt(0).toUpperCase() + page.slice(1)}</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Centered Page Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-8xl font-bold">Enora Sun</h1>
        <p className="text-2xl mt-4">Welcome to my portfolio!</p>
      </div>
    </div>
  );
}