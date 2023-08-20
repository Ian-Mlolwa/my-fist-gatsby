import * as React from "react";

const Footer = () => {
  return (
    <footer className="mt-11">
      <span className="flex justify-center text-gray-400 text-sm">
        Copyrights © {new Date().getFullYear()}. All Rights Reserved.
      </span>
      <br />
      <p className="flex text-white justify-center mb-10">Projects by Ian</p>
    </footer>
  );
};

export default Footer;
