interface Props {
  type: HTMLInputElement["type"];
  label: string;
  name: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<Props> = ({ type, label, name, value, setValue }: Props) => {
  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={setValue}
        id={label}
        type={type}
        required
        name={name}
      />
    </div>
  );
};

export default Field;
