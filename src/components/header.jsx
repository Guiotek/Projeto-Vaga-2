import React from "react";
import githubLogo from "../assets/github.png";
import "../styles/header.css";

const header = () => {
  return (
    <header>
      <img src={githubLogo} alt="GitHub logo" />
      <h2>Perfil</h2>
      <h1>GitHub</h1>
    </header>
  );
};

export default header;
