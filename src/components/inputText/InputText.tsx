import { InputHTMLAttributes, forwardRef } from "react";

type InputTextProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ ...inputProps }, ref): JSX.Element => {
    return (
      <input
        ref={ref}
        type="text"
        className="input border-slate-800 w-full"
        {...inputProps}
      />
    );
  }
);
