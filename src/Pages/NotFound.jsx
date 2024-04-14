import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Err1 } from "../assets/404.svg";
import Header from "../componenets/Header";
import { StyledError } from "../styles/NotFound";

function NotFound() {
  return (
    <StyledError>
      <Header />
      <>
        <div>
          <h2>
            Oops! Page Not Found. <Link to="/">Back to Home</Link>
          </h2>
          <Err1 />
        </div>
      </>
    </StyledError>
  );
}

export default NotFound;