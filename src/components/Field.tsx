import { useId } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Field: React.FC<Props> = ({ label, ...inputProps }: Props) => {
  const id = useId();

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
    </div>
  );
};

export default Field;
