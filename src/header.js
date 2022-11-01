import React from "react";
import GithubLogo from "./img/Github.svg";
import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div class="header">
        <a
          className="github-icon"
          href="https://github.com/HamzaZaidiX/Books-Library-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "3rem",
              width: "3rem",
              padding: "3px",
              cursor: "pointer",
              color: "#db4437",
            }}
            src={GithubLogo}
            alt="github-icon"
          />
        </a>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              marginBottom: 50,
              // color: "#444",
              textAlign: "center",
              // fontWeight: "bold", //No need of bold because headings are itself bold
              fontFamily: "Scheherazade New",
              textShadow: "3px 3px 3px #444",
            }}
          >
            📚 A Book Library for all Book Lovers
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;
