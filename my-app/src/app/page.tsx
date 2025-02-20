import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">Explore my pages:</p>
      <div className="mt-4 space-x-4">
        <Link href="/about" className="text-blue-500">About</Link>
        <Link href="/project" className="text-blue-500">Projects</Link>
        <Link href="/resume" className="text-blue-500">Resume</Link>
      </div>
    </div>
  );
}