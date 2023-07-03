import { ReactElement } from "react";

interface InputRootProps {
  children: ReactElement;
}

export const InputRoot = ({ children }: InputRootProps): JSX.Element => {
  return <div className="form-control w-full mb-4">{children}</div>;
};
