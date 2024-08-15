import React from "react";

function Footer() {
  const currentTime = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @{currentTime}</p>
    </footer>
  );
}

export default Footer;