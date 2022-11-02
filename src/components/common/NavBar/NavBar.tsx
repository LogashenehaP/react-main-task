import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { navigationContent } from '../../../resources/String';
import { Icon } from './NavStyle';
import {
  Hamburger,
  LinkStyle,
  Menu,
  NavigationBar,
  NavItems,
} from './NavStyle';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <NavigationBar>
      <Hamburger>
        <FaBars onClick={toggleNav} />
      </Hamburger>
      {(toggleMenu || screenWidth > 767) && (
        <Menu>
          <NavItems>
            <LinkStyle to="/" onClick={() => setToggleMenu(!toggleMenu)}>
              {navigationContent.home}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/quoting">{navigationContent.quoting}</LinkStyle>
          </NavItems>

          <NavItems>
            <LinkStyle
              to="/application"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {navigationContent.applications}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle
              to="/eligibility"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {navigationContent.eligibilityCheck}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle
              to="/appointment"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {navigationContent.scopeOfAppointment}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/search" onClick={() => setToggleMenu(!toggleMenu)}>
              {navigationContent.providerSearch}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <Icon />
            {navigationContent.logOut}
          </NavItems>
        </Menu>
      )}
    </NavigationBar>
  );
};
export default Navbar;
