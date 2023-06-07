import Header from "./Header";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-6">
      <Header />
      <main className="lg:col-span-3">{children}</main>
    </div>
  );
};

export default Layout;
