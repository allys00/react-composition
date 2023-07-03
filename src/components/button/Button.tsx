import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button = ({ label, ...buttonProps }: ButtonProps): JSX.Element => {
  return (
    <button className="btn btn-neutral" {...buttonProps}>
      {label}
    </button>
  );
};
