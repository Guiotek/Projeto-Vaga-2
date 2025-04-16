import React from "react";
import "../styles/notFound.css";

const notFound = () => {
  return (
    <div className="error-message">
      <p>Nenhum perfil foi encontrado com ese nome de usuário.</p>
      <p>Tente novamente</p>
    </div>
  );
};

export default notFound;
