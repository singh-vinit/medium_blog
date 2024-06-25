type Props = {
  btnText: string;
  handler: () => void;
};
const Button = ({ btnText, handler }: Props) => {
  return (
    <button
      className="bg-black text-white font-medium p-2 w-full rounded-sm mt-4"
      onClick={handler}
    >
      {btnText}
    </button>
  );
};

export default Button;
