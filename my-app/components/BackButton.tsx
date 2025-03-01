"use client";  // Required for Next.js client-side navigation
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}  // Navigates to homepage
      className="text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition z-10 relative"
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;