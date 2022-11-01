import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <h4>
          &#60;&#47;&#62; with ❤️ &
          <a
            style={{
              textDecoration: "none",
              color: "white",
            }}
            href="https://www.buymeacoffee.com/shjz"
            target="_blank"
            rel="noreferrer"
          >
            ☕
          </a>
          by{" "}
          <a
            style={{
              textDecoration: "none",
              color: "white",
            }}
            href="https://github.com/HamzaZaidiX"
            target="_blank"
            rel="noreferrer"
          >
            Hamza Zaidi
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
