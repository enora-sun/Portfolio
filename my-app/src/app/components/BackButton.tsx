import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}  // Go back to the previous page
      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    >
      ← Back to home
    </button>
  );
};

export default BackButton;