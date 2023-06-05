import Header from "./Header";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
