import React from "react";

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;
