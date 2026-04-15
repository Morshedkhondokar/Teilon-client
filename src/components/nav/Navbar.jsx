import { useState } from "react";
import { useNavigate } from "react-router";
import NavDesktopDesign from "./NavDesktopDesign";
import NavMobileDesign from "./NavMobileDesign";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Navigate to search results page
    navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavDesktopDesign
          navItems={navItems}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <NavMobileDesign
          navItems={navItems}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </div>
    </>
  );
};

export default Navbar;