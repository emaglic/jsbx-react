import React, { useState } from "react";
import { StyledHeader, Logo, LogoText, Text, HeaderMenu } from "./index.style";
import logo from "../../images/cube.svg";
import ExtraMenu from "./components/ExtraMenu";
import HelpMenu from "./components/HelpMenu";
import PresetMenu from "./components/PresetMenu";

const Header = () => {
  const importProject = () => {};

  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
      <LogoText>
        <Text>JSBX</Text>
      </LogoText>
      <HeaderMenu>
        <HelpMenu />
        <PresetMenu />
        <ExtraMenu importProject={importProject} />
      </HeaderMenu>
    </StyledHeader>
  );
};

export default Header;
