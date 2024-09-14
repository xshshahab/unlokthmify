import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import SocialLinks from "./SocialLinks";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    closeMobileMenu();
    navigate("/");
  };

  return (
    <header
      className={`fixed top-0 z-[50] w-full transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-2 px-14">
        <Logo onClick={handleLogoClick} />
        <DesktopNav />
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          handleLogoClick={handleLogoClick}
        />
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        handleLogoClick={handleLogoClick}
        isMobileMenu={true}
      />
    </header>
  );
};

export default Header;
