import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router";
import Logo from "../Logo";

const NavDesktopDesign = ({ navItems, searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <>
      {/* ─── Fixed Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Nav Items */}
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-wider cursor-pointer
                  transition-all duration-300
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 
                  after:h-0.5 after:bg-black after:transition-all after:duration-300
                  ${isActive
                    ? "text-black after:w-full"
                    : "text-gray-600 after:w-0 hover:text-black hover:after:w-full"
                  }`
                }
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
          </ul>

          {/* Search Bar with Button */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full w-96 
              border border-transparent focus-within:border-black focus-within:bg-white 
              transition-all duration-300 overflow-hidden"
          >
            <FaSearch className="text-gray-400 ml-4 text-sm" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent outline-none text-sm text-black 
                placeholder-gray-400 px-3 py-2"
            />
            <button
              type="submit"
              className="bg-black text-white text-sm font-semibold px-5 py-2 
                hover:bg-gray-800 transition-colors duration-200 cursor-pointer 
                whitespace-nowrap"
            >
              Search
            </button>
          </form>

          {/* Cart & Profile */}
          <div className="flex gap-6 items-center">
            {/* Cart */}
            <div className="relative group cursor-pointer">
              <MdOutlineShoppingCart className="text-2xl text-black group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold 
                h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Profile */}
            <CgProfile className="text-2xl text-black hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </div>

        </div>
      </nav>

      {/* ─── Spacer ─── */}
      <div className="h-18" />
    </>
  );
};

export default NavDesktopDesign;