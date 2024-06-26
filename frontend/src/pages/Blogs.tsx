import Card from "../components/Card";
import { useBlogs } from "../hooks";
import Skeleton from "../components/Skeleton";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

const Blogs = () => {
  const { login, logout, isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");
  if (token) {
    login();
  } else {
    logout();
  }

  const { loading, blogs } = useBlogs();
  return (
    <>
      {!isAuthenticated ? <Navigate to="/signin" /> : null}
      {loading ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="bg-white h-screen">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              path={blog.id}
              author={blog.author.name}
              date={blog.createdAt.split("T")[0]}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
