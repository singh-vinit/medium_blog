import { useState } from "react";
import { createBlogSchema } from "@vinit4/medium-common";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

const Publish = () => {
  const navigate = useNavigate();
  const [create, setCreate] = useState<createBlogSchema>({
    title: "",
    content: "",
  });

  function getTitle(e: any) {
    setCreate({ ...create, title: e.target.value });
  }

  function getContent(e: any) {
    setCreate({ ...create, content: e.target.value });
  }

  async function handleClick() {
    try {
      const res = await axios.post(`${BACKEND_URL}/blog`, create, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);
      navigate(`/blog/${res.data.id}`);
    } catch (error) {
      alert("error");
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
        />
        <textarea
          placeholder="Tell Your Story..."
          className="mb-6 text-xl p-2 w-full h-40 placeholder:text-xl focus:outline-none"
          onChange={getContent}
        />
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        publish
      </button>
    </div>
  );
};

export default Publish;
