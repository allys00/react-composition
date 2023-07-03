interface InputHelperProps {
  text: string;
}

export const InputHelper = ({ text }: InputHelperProps): JSX.Element => {
  return (
    <label className="label">
      <span className="label-text-alt">{text}</span>
    </label>
  );
};
