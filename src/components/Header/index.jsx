import React from "react";
import { StyledHeader, Logo, LogoText, Text } from "./index.style";
import logo from "../../images/cube.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
      <LogoText>
        <Text
          style={{
            fontFamily: "Permanent-Marker",
            marginLeft: "0.5rem",
            fontSize: "1rem",
            letterSpacing: "0px",
          }}
        >
          JSBX2
        </Text>
      </LogoText>
    </StyledHeader>
  );
};

export default Header;
