interface Props {
  label: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterDropdown: React.FC<Props> = ({ label, options, onChange }: Props) => {
  return (
    <div className="grid gap-1 place-items-start">
      <label htmlFor={label}>{label}</label>
      <select
        className="bg-white p-2 rounded-lg"
        onChange={onChange}
        id={label}
        defaultValue="DEFAULT"
      >
        <option value="DEFAULT" disabled>
          -{label.toLowerCase()}-
        </option>
        <option value="all">Todos</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
