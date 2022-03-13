import React from "react";


import { FaFacebookSquare,FaGithubSquare,FaInstagramSquare } from 'react-icons/fa';

function HeaderSocials() {
    return <div className="header__socials">
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
      <a href="http://github.com" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
  </div>;
}

export default HeaderSocials;
