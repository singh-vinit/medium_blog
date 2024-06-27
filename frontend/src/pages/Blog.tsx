import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogSkeleton from "../components/BlogSkeleton";
import AuthorSkeleton from "../components/AuthorSkeleton";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  return (
    <div>
      {loading ? (
        <div className="md:grid md:grid-cols-4 gap-4">
          <BlogSkeleton />
          <AuthorSkeleton />
        </div>
      ) : (
        <div className="md:grid md:grid-cols-4 gap-4">
          <div className="md:col-span-3 p-4 rounded-md shadow-md bg-white">
            <div className="text-4xl text-black font-bold capitalize text-left">
              {blog.title}
            </div>
            <div className="text-lg font-normal text-gray-500">
              published on {blog.createdAt.split("T")[0]}
            </div>
            <div className="text-lg font-mediumt">{blog.content}</div>
          </div>

          <div className="md:col-span-1 p-4 shadow-md bg-white">
            <div className="text-lg font-light text-gray-600">Author</div>
            <div className="text-2xl font-bold text-black capitalize">
              {blog.author.name}
            </div>
            <div>description about author</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
