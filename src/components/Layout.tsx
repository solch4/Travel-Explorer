import Navbar from "./Navbar";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="lg:grid lg:grid-cols-4">
      <a
        className="-translate-y-full focus:translate-y-0 bg-primary-700 text-primary-50 font-semibold fixed z-50 p-2 transition"
        href="#main"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main
        className="lg:col-span-3 lg:h-min grid gap-4 lg:gap-8 p-4 lg:px-6 lg:py-10"
        id="main"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
