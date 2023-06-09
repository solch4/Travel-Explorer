interface Props {
  children: string;
}

const Loader: React.FC<Props> = ({ children }: Props) => (
  <h1 className="main-title">{children}</h1>
);

export default Loader;
