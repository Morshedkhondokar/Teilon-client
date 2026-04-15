import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Logo from "../Logo";

const NavMobileDesign = ({ navItems, searchQuery, setSearchQuery, handleSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const onSearchSubmit = (e) => {
    handleSearch(e);
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* ─── Fixed Navbar ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">

        {/* ─── Top Bar ─── */}
        <div className="px-4 py-3 flex items-center justify-between">

          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsSearchOpen(false);
              }}
              className="p-2 rounded-lg bg-black text-white active:scale-95 transition-transform duration-150"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <IoClose className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
            <Logo />
          </div>

          {/* Right: Search, Cart, Profile */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                setIsMenuOpen(false);
              }}
              className="p-2 rounded-lg bg-gray-100 text-black active:scale-95 transition-transform duration-150"
              aria-label="Toggle search"
            >
              <FaSearch className="text-base" />
            </button>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <MdOutlineShoppingCart className="text-xl text-black" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Profile */}
            <CgProfile className="text-xl text-black cursor-pointer" />
          </div>
        </div>

        {/* ─── Search Dropdown ─── */}
        <div
          className={`absolute inset-x-0 top-full z-40 bg-white border-b border-gray-200 shadow-md
            transition-all duration-300 ease-out overflow-hidden
            ${isSearchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-3">
            <form onSubmit={onSearchSubmit} className="flex items-center gap-2">
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2
                border border-transparent focus-within:border-black focus-within:bg-white
                transition-all duration-300">
                <FaSearch className="text-gray-400 text-sm mr-2" />
                <input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent outline-none text-sm text-black placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full
                  active:scale-95 transition-transform duration-150 whitespace-nowrap"
              >
                Search
              </button>
            </form>
          </div>
        </div>

      </nav>

      {/* ─── Spacer ─── */}
      <div className="h-14" />

      {/* Search backdrop */}
      {isSearchOpen && (
        <button
          type="button"
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 z-30 bg-black/10"
          aria-label="Close search"
        />
      )}

      {/* ─── Slide-in Menu ─── */}
      <div
        className={`fixed inset-y-0 left-0 z-60 w-4/5 max-w-xs bg-white shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-full overflow-y-auto flex flex-col">

          {/* Menu Header */}
          <div className="px-5 py-5 flex items-center justify-between border-b border-gray-200">
            <Logo />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-black text-white active:scale-95 transition-transform duration-150"
              aria-label="Close menu"
            >
              <IoClose className="text-lg" />
            </button>
          </div>

          {/* Nav Items */}
          <ul className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 rounded-xl text-base font-semibold uppercase tracking-wider
                    transition-all duration-200
                    ${isActive
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Menu Footer */}
          <div className="px-4 py-5 border-t border-gray-200 space-y-3">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-100 
              text-black font-medium hover:bg-gray-200 transition-colors duration-200">
              <CgProfile className="text-xl" />
              <span className="text-sm uppercase tracking-wider">My Account</span>
            </button>

            <button className="flex items-center justify-between w-full px-4 py-3 rounded-xl 
              bg-black text-white font-medium active:scale-[0.98] transition-transform duration-150">
              <div className="flex items-center gap-3">
                <MdOutlineShoppingCart className="text-xl" />
                <span className="text-sm uppercase tracking-wider">My Cart</span>
              </div>
              <span className="bg-white text-black text-xs font-bold h-5 w-5 rounded-full 
                flex items-center justify-center">
                0
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Overlay Backdrop */}
      {isMenuOpen && (
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-55 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          aria-label="Close menu overlay"
        />
      )}
    </>
  );
};

export default NavMobileDesign;