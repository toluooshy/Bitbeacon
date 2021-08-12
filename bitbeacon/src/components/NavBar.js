import React from "react";
import LogoText from "./LogoText";
import UnstyledLink from "./UnstyledLink";

let image = require("../images/bitbeacon-logo-white.png");

function NavBar() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: "10px" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              src={image.default}
              style={{ height: 48 }}
              alt="image not found"
            />

            <UnstyledLink url={""}>
              <LogoText>Bitbeacon</LogoText>
            </UnstyledLink>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <UnstyledLink url={"signin"}>
            <LogoText>Sign In</LogoText>
          </UnstyledLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
