"use client";  // Required for Next.js client-side navigation
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}  // Navigates to homepage
      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;