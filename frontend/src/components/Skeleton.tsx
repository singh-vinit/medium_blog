const Skeleton = () => {
  return (
    <div className="border border-blue-300 p-4 max-w-2xl mx-auto">
      <div className="animate-pulse">
        <div className="flex items-center gap-x-4 mb-3">
          <div className="rounded-full bg-slate-700 h-6 w-6"></div>
          <div className="bg-slate-700 h-2 w-12 rounded"></div>
          <div className="bg-slate-700 h-2 w-12 rounded"></div>
        </div>
        <div className="bg-slate-700 rounded h-2 w-1/3 mb-3"></div>
        <div className="bg-slate-700 rounded h-2 w-1/2 mb-3"></div>
        <div className="bg-slate-700 rounded h-2 w-1/12 mb-3"></div>
      </div>
    </div>
  );
};

export default Skeleton;
