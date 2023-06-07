interface Props {
  type: HTMLInputElement["type"];
  label: string;
  name: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<Props> = ({ type, label, name, value, setValue }: Props) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={label}>{label}</label>
      <input
        className="w-full border border-neutral-700 p-4 rounded-2xl placeholder:text-neutral-600"
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
