import { useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ children, title }: ILayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div className="relative h-auto min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto px-8 mb-24">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
