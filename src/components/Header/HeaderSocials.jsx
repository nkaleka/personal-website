import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="http://narinderpal.ca" target="_blank">
        <CgWebsite />
      </a>
    </div>
  );
};

export default HeaderSocials;
