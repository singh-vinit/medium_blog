type Props = {
  btnText: string;
};
const Button = ({ btnText }: Props) => {
  return (
    <button className="bg-black text-white font-medium p-2 w-full rounded-sm mt-4">
      {btnText}
    </button>
  );
};

export default Button;
