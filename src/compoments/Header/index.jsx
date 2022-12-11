import React from "react";
import "./header.css";
import { useState } from "react";
import profile from "../../assets/image-avatar.png";
import cart from "../../assets/icon-cart.svg";
import logo from "../../assets/logo.svg";
import OpenCart from "../OpenCart";

const Header = () => {
  const [position, setPosition] = useState("-500px");

  function toggleMenu(event) {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    document.body.classList.toggle("active");
  }

  function handlePosition(event) {
    if (position == "-500px") {
      setPosition("100px");
    } else {
      setPosition("-500px");
    }
  }
  return (
    <header id="header">
      <img src={logo} alt="logo" id="logo" />

      <nav id="nav">
        <button onClick={toggleMenu} id="btn-mobile">
          <span id="hamburger"></span>
        </button>

        <ul id="menu" role="menu">
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="menu-img">
        <div className="cart-item">
          <div className="itens"></div>
          <img onClick={handlePosition} id="cart" src={cart} alt="cart" />
        </div>
        <img id="profile" src={profile} alt="profile" />
        <OpenCart position={position} />
      </div>
    </header>
  );
};

export default Header;
