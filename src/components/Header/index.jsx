import React from "react";
import { StyledHeader, Logo, LogoText, Text, HeaderMenu } from "./index.style";
import logo from "../../images/cube.svg";
import ExtraMenu from "./components/ExtraMenu";

const Header = () => {
  const importProject = () => {};

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
      <HeaderMenu>
        <ExtraMenu importProject={importProject} />
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
