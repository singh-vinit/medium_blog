import { useState } from "react";
import { createBlogSchema } from "@vinit4/medium-common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useAuth } from "../hooks/Auth";
import Spinner from "../components/Spinner";

const Publish = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    navigate("/signin");
  }

  const [create, setCreate] = useState<createBlogSchema>({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function getTitle(e: any) {
    setCreate({ ...create, title: e.target.value });
  }

  function getContent(e: any) {
    setCreate({ ...create, content: e.target.value });
  }

  function containsNumbers(str: string) {
    return /\d/.test(str);
  }

  async function handleClick() {
    try {
      if (containsNumbers(create.title)) {
        throw new Error("wrong inputs");
      }
      if (create.title.length < 10) {
        throw new Error("title should be at least of 10 characters");
      }
      if (create.content.length < 50) {
        throw new Error("title should be at least of 50 characters");
      }
      setIsLoading(true);
      const res = await axios.post(`${BACKEND_URL}/blog`, create, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setIsLoading(false);
      navigate(`/blog/${res.data.id}`);
    } catch (error: any) {
      alert(error.message);
      setIsLoading(false);
      setCreate({ ...create, title: "", content: "" });
    }
  }

  return (
    <div className="shadow-md rounded-md p-6 mx-4">
      <div>
        <input
          type="text"
          placeholder="Titlte"
          className="mb-4 text-4xl p-2 w-full placeholder:text-4xl focus:outline-none"
          onChange={getTitle}
          value={create.title}
          disabled={isLoading}
        />
        <textarea
          placeholder="Tell Your Story..."
          className="mb-6 text-xl p-2 w-full h-40 placeholder:text-xl focus:outline-none"
          onChange={getContent}
          value={create.content}
          disabled={isLoading}
        />
      </div>
      <button
        disabled={isLoading}
        onClick={handleClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? <Spinner /> : <span>publish</span>}
      </button>
    </div>
  );
};

export default Publish;
