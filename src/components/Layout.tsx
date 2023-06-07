import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <Navbar />
      <main className="lg:col-span-3 lg:h-min grid gap-4 lg:gap-8 p-4 lg:px-6 lg:py-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
