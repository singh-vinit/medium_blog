import Spinner from "./Spinner";
type Props = {
  btnText: string;
  loading: boolean;
  handler: () => void;
};
const Button = ({ btnText, handler, loading }: Props) => {
  return (
    <button
      className="bg-black text-white font-medium p-2 w-full rounded-md mt-4 hover:bg-gray-900"
      onClick={handler}
    >
      {loading ? <Spinner /> : btnText}
    </button>
  );
};

export default Button;
