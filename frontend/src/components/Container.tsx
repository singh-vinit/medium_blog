import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="shadow-xl md:w-9/12 md:p-5 w-10/12 p-4 rounded-md">
      {children}
    </div>
  );
};

export default Container;
