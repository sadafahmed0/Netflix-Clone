import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          className="nav_avatar"
          src="https://loodibee.com/wp-content/uploads/Netflix-avatar-12.png"
          alt="Netflix Logo"
        />
      </div>
    </>
  );
};

export default Navbar;
