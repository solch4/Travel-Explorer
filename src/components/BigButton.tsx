interface Props {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

const BigButton: React.FC<Props> = ({ children, type, handleClick }: Props) => {
  return (
    <button
      className="w-full bg-primary-500 hover:bg-primary-600 text-primary-50 font-bold py-4 px-6 rounded-lg transition"
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default BigButton;
