import { Outlet } from "react-router";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
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
