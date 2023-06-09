interface Props {
  label: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterDropdown: React.FC<Props> = ({ label, options, onChange }: Props) => {
  return (
    <div className="grid gap-2">
      <label htmlFor={label}>{label}</label>
      <select
        className="sm:w-min bg-neutral-50 py-2 px-4 rounded-lg"
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
