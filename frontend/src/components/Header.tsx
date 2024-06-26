import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { useState } from "react";

type Props = {
  icon: string | null;
};

const Header = ({ icon }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleClick() {
    navigate("/publish");
  }

  function logoutHandler() {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    logout();
  }

  return (
    <div className="bg-white p-4 flex justify-between items-center mb-6 border shadow-sm relative">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
        >
          <span className="font-medium text-gray-500 text-xl dark:text-gray-300">
            {icon}
          </span>
        </button>
      </div>
      {isOpen ? (
        <div className="border-2 shadow-lg absolute right-1 top-20">
          <button onClick={logoutHandler}>
            <div className="rounded-md font-medium hover:font-light hover:bg-gray-200 p-4">
              logout
            </div>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
