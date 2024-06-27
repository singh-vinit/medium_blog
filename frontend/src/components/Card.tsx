import { Link } from "react-router-dom";

type Props = {
  author: string;
  date: string;
  title: string;
  content: string;
  path: string;
};

const Card = ({ author, date, title, content, path }: Props) => {
  return (
    <Link to={`/blog/${path}`}>
      <div className="max-w-full p-4 md:max-w-2xl border bg-white md:mx-auto">
        <div className="flex gap-2 mb-4">
          <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full">
            <span className="text-black">{author[0]}</span>
          </div>
          <span className="text-black capitalize">{author}</span>
          <span className="text-slate-400">{date}</span>
        </div>
        <div>
          <div className="text-left text-black capitalize font-semibold text-xl">
            {title}
          </div>
          <div className="text-left text-slate-400 lowercase">
            {content.slice(0, 100)} ...read
          </div>
          <div className="text-left text-slate-400 mt-2">
            {Math.ceil(content.length / 100)} minutes read
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
