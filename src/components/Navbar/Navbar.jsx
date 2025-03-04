import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Nav.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  const handleSignin = (event) =>{
    event.preventDefault();
    setShowLogin(true);
  }

  return (
    <div>
       <nav className="navbar navbar-expand-lg  fixed-top" style={{ backgroundColor: "#ffff" }}>
        <div className="container-fluid">
          <a className="navbar-brand mx-3" style={{ fontSize: "1.6rem", color: "#F40009" }} href="#">F O O D I E</a>
          {/* <img src={assets.logo} style={{ height: "55px" }} alt="" /> */}
          {/* <img src={assets.logo} style={{ height: "55px" }} alt="" /> */}


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ marginLeft: "300px" }}>
              <li className="nav-item" style={{ margin: "12px", marginRight: "20px" }}>
                <a
                  className={`nav-link ${menu === "home" ? "active" : ""}`}
                  style={{ color: "black", textDecorationLine: "none", borderBottom: menu === "home" ? "2px solid #F40009" : "none" }}
                  href="/"
                  onClick={() => handleMenuClick("home")}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item" style={{ margin: "12px", marginRight: "20px" }}>
                <a
                  className={`nav-link ${menu === "menu" ? "active" : ""}`}
                  style={{ color: "black", textDecorationLine: "none", borderBottom: menu === "menu" ? "2px solid #F40009" : "none" }}
                  href="#menu-list"
                  onClick={() => handleMenuClick("menu")}
                >
                  MENU
                </a>
              </li>
              <li className="nav-item" style={{ margin: "12px", marginRight: "20px" }}>
                <a
                  className={`nav-link ${menu === "contact" ? "active" : ""}`}
                  style={{ color: "black", textDecorationLine: "none", borderBottom: menu === "contact" ? "2px solid #F40009" : "none" }}
                  href="#contact-us"
                  onClick={() => handleMenuClick("contact")}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <img src={assets.cart} style={{ height: "45px", marginRight: "39px" }} alt="" />
              <div className='dot'
              >.</div>
              <button 
              className='btn text-white px-4' 
              style={{ backgroundColor: "#F40009" }}
              onClick={handleSignin}
              >Sign in</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;