import React from "react";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("");
  const burgerActive = () => {
    active === "" ? setActive("open") : setActive("");
  };
  return (
    <header className="header">
      <div className={`header_logo ${active}`}></div>
      <nav className={`header_nav ${active}`}>
        <ul className="header_list">
          <li>tratamientos</li>
          <li>consulta online</li>
          <li>quiénes somos</li>
          <a href="#faqs">preguntas frecuentes</a>
          <li>contacto</li>
        </ul>
      </nav>
      <button>¿tenés dudas?</button>
      <div className={`menu-button ${active}`} onClick={burgerActive}>
        <div className="menu-button__burger"></div>
      </div>
      <div className={`burger_nav ${active}`}>
        <ul>
          <li>tratamientos</li>
          <li>consulta online</li>
          <li>quiénes somos</li>
          <li>preguntas frecuentes</li>
          <li>contacto</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
