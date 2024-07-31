import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import Navigation from './Navigation';
import UserDropDown from './UserDropDown';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoWrapper>
            {/* {screenWidth < 1100 ? (
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </MenuButton>
            ) : null} */}
            <Logo />
          </LogoWrapper>
          <NavigationWrapper>
            <Navigation />
          </NavigationWrapper>
          <UserDropDown />
        </Container>
      </HeaderWrapper>
      {screenWidth < 1100 && (
        <MobileMenu className={isMenuOpen ? 'open' : ''}>
      
          <Navigation />
        </MobileMenu>
      )}
    </>
  );
};
    {/* <CloseButton onClick={() => setIsMenuOpen(false)}>
            {/* <FaTimes /> */}
          // {/* </CloseButton> */} */}
export default Header;

const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #002244, #4682B4);
  color: #e0e0e0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  outline: none;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const MobileMenu = styled.div`

  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #002244, #4682B4);
  z-index: 100;
  padding: 2rem;
  display: flex;
    flex-direction: column;
  transform: translateX(-150%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  outline: none;
`;