import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; Submitted to Dr Andrew McIntyre</div>
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
