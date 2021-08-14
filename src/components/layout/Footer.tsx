import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_info">
        <div className="footer_logo"></div>
        <p>© XCALE HEALTH srl . Todos los derechos reservados.</p>
      </div>
      <div className="socialContainer">
        <p>¡Hablemos!</p>
        <div className="footer_social_container">
          <div className="footer_social mail"></div>
          <div className="footer_social wsp"></div>
          <div className="footer_social fb"></div>
          <div className="footer_social ig"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
