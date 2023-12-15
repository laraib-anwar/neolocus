import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #FFFCF5;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 60px;
  margin-right: 10px;
`;

const NavText = styled.div`
  display: flex;
  gap: 10px;
`;



const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo src="/neolocus.png" alt="Neolocus Logo" />
      </LogoContainer>
      <NavText>
        <div>Floor Plan</div>
        <div>Favorites</div>
      </NavText>
    </NavbarContainer>
  );
};

export default Navbar;