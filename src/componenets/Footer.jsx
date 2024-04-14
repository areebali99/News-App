import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "../styles/Footer";
import { Tag } from "../styles/Section";

function Footer() {
  return (
    <StyledFooter>
      <Link to="/">
        <h5>NEWSFEED</h5>
      </Link>
      <div className="signout flex-column">
        <span>
          {" "}
          Made with &#9829; by{" "}
          <Tag href="https://github.com/areebali99/" target="_blank" rel="noreferrer">
           Areeb Ali
          </Tag>
        </span>
      </div>
    </StyledFooter>
  );
}

export default Footer;