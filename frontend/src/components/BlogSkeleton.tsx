const BlogSkeleton = () => {
  return (
    <div className="col-span-3 p-4 shadow-md bg-white">
      <div className="animate-pulse">
        <div className="bg-slate-700 rounded h-2 w-1/3 mb-3"></div>
        <div className="bg-slate-700 rounded h-2 w-1/6 mb-3"></div>
        <div className="bg-slate-700 rounded h-2 w-1/2 mb-3"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
