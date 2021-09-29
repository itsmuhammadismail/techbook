import Footer from "./Footer";
import Header from "./Header";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Layout;
