import React from "react";
import "./header.css";
import { useState, useContext } from "react";
import profile from "../../assets/image-avatar.png";
import cart from "../../assets/icon-cart.svg";
import logo from "../../assets/logo.svg";
import OpenCart from "../OpenCart";
import { Context } from "../../contexts/UseProvider";

const Header = () => {

  const {itensStyle, itensValue} = useContext(Context)
  const [position, setPosition] = useState("-500px");

  const toggleMenu = () => {
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  return (
    <header id="header">
      <img src={logo} alt="logo" id="logo" />

      <nav id="nav">
        <button onClick={toggleMenu} id="btn-mobile">
          <span id="hamburger"></span>
        </button>

        <ul id="menu">
          <li>
            <a>Collections</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Women</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="menu-img">
        <div className="cart-item">
          <div className="itens" style={itensStyle}>{itensValue}</div>
          <img onClick={()=> position == "-500px" ? 
          setPosition("100px") : 
          setPosition("-500px")} 
          id="cart" src={cart} alt="cart" />
        </div>
        <img id="profile" src={profile} alt="profile" />
        <OpenCart position={position} />
      </div>
    </header>
  );
};

export default Header;
