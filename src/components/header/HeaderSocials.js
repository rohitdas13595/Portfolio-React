import React from "react";

import {BsLinkedin} from 'react-icons/bs'
import { FaGithubSquare,FaInstagramSquare } from 'react-icons/fa';

function HeaderSocials() {
    return <div className="header__socials">
      <a href={ process.env.REACT_APP_LINKEDIN}target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
      <a href={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noopener noreferrer"><FaInstagramSquare/></a>
  </div>;
}

export default HeaderSocials;
