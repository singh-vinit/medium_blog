import { Link, useNavigate } from "react-router-dom";

type Props = {
  icon: string;
};

const Header = ({ icon }: Props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/publish");
  }

  return (
    <div className="bg-white p-4 flex justify-between items-center mb-6 border shadow-sm">
      <Link to={"/blogs"}>
        <div className="font-bold text-xl capitalize">medium</div>
      </Link>
      <div>
        <button
          onClick={handleClick}
          className="mr-6 text-white bg-green-700 hover:bg-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          new
        </button>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-500 text-xl dark:text-gray-300">
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
