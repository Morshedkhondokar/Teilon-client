import { Outlet } from "react-router";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* navbar */}
      <Navbar />
      {/* outlet */}
      <Outlet />

      <div className="h-screen w-full flex items-center justify-center bg-blue-600">
        <h1 className="text-4xl font-bold text-white">Welcome to Teilon!</h1>
      </div>
      {/* footer */}
    </div>
  );
};

export default App;
