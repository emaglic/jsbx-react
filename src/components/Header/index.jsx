import React from "react";
import { StyledHeader, Logo, LogoText } from "./index.style";
import logo from "../../images/cube.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
      <LogoText>JSBX2</LogoText>
    </StyledHeader>
  );
};

export default Header;
