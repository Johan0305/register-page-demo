import React from "react";
import logo from "../../assets/ML-logo.svg";

const Header = () => {
  return (
    <div id="global-container-header">
      <div className="container-logo-ml-landing">
        <img src={logo} alt="logo-MarketLogic" />
      </div>
      <div className="container-title-landing">
        <h1>¡Bienvenido a registro de usuarios de MarketLogic!</h1>
      </div>
    </div>
  );
};

export default Header;
