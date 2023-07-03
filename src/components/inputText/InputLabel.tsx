interface InputLabelProps {
  label: string;
}

export const InputLabel = ({ label }: InputLabelProps): JSX.Element => {
  return (
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
  );
};
