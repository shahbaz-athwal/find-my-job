import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footerShow">
      <div>&copy; FindMyJob - Shahbaz Singh</div>
      <div>
        <Link to={"https://www.instagram.com/shahbaz-athwal/"} target="_blank">
          <RiInstagramFill />
        </Link>
        <Link to="mailto:0263901s@acadiau.ca">
          <MdOutlineMail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
