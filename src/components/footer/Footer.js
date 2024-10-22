import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">Copyright {year} Argent Bank</p>
    </footer>
  );
};

export default Footer;
