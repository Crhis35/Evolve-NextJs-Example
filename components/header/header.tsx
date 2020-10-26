import React from "react";

import Logo from "../../assets/logo-w.svg";

import { LogoContainer, LogoWrapper } from "../base/base";
import { FloatingButton, SubButton, Navigation } from "./header.style";

export const Header = () => (
  <Navigation>
    <LogoWrapper>
      <LogoContainer href="/" size="8.5">
        <Logo />
      </LogoContainer>
    </LogoWrapper>
    <FloatingButton>
      <SubButton href="/" className="tl">
        <i className="fas fa-home"></i>
      </SubButton>
      <SubButton href="/" className="tr">
        <i className="fas fa-user-friends"></i>
      </SubButton>
      <SubButton href="/blog" className="bl">
        <i className="fas fa-book"></i>
      </SubButton>
      <SubButton href="/" className="br">
        <i className="fas fa-address-card"></i>
      </SubButton>
    </FloatingButton>
  </Navigation>
);
export default Header;
