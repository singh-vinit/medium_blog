import { Link } from "react-router-dom";

type Props = {
  text: string;
  linkText: string;
  path: string;
};
const SubHeading = ({ text, linkText, path }: Props) => {
  return (
    <div className="text-slate-500 text-lg font-semibold">
      {text}
      <Link className="ml-2 underline" to={path}>{linkText}</Link>
    </div>
  );
};

export default SubHeading;
