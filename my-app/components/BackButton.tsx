"use client";  // Required for Next.js client-side navigation
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}  // Navigates to homepage
      style={{ backgroundColor: "lightskyblue", color: "white" }}
      className="px-6 py-3 text-lg font-mono font-extralight 
      rounded-lg shadow-md transition-all duration-300 hover:bg-blue-500 
      hover:scale-105 active:scale-95 drop-shadow-lg"
    >
      ← Back to Homepage
    </button>
  );
};

export default BackButton;