import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./FullPageCard.scss";

const FullPageCard = () => {
  return (
    <div className="full-page-card">
      <div className="card-content">
        <div className="card-header">
          <img
            src="https://via.placeholder.com/150"
            alt="User Icon"
            className="profile-icon"
          />
          <h1>John Doe</h1>
          <p>Full-Stack Developer</p>
        </div>
        <div className="card-body">
          <p>
            Bem-vindo ao meu portfólio! Sou um desenvolvedor apaixonado por
            resolver problemas e criar experiências digitais incríveis. Conecte-se
            comigo através das redes sociais abaixo.
          </p>
        </div>
        <div className="card-footer">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullPageCard;
