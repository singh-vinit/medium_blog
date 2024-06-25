type Props = {
  icon: string;
};

const Header = ({ icon }: Props) => {
  return (
    <div className="bg-white p-4 flex justify-between items-center mb-6 border shadow-sm">
      <div className="font-bold text-xl capitalize">medium</div>
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-500 text-xl dark:text-gray-300">
          {icon}
        </span>
      </div>
    </div>
  );
};

export default Header;
