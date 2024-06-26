import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

type blogSchema = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
};

export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<blogSchema[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/bulk`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data.posts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return { loading, blogs };
}

type BlogSchema = {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
};

export function useBlog(id: string) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogSchema>({
    title: "",
    content: "",
    createdAt: "",
    author: {
      name: "",
    },
  });
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        setBlog(res.data.post);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return { loading, blog };
}
