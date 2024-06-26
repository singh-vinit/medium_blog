import Card from "../components/Card";
import { useBlogs } from "../hooks";
import Skeleton from "../components/Skeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  return (
    <>
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
