import { Outlet } from "react-router";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Scroll to Top */}
      <ScrollToTop />
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
