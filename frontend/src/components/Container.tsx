import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="shadow-xl w-9/12 p-5 rounded-md">{children}</div>;
};

export default Container;
