import React from 'react';
import {
  NavigationBar,
  Hamburger,
  NavItems,
  Text,
  LinkStyle,
  MobileLinkStyle,
  ItemResponsive,
  Icon,
  NavItemsResponsive,
  Menu,
} from './NavStyle';
import { navigationContent } from '../../../resources/String';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <NavigationBar>
        <Hamburger onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <ImCross /> : <FaBars />}
        </Hamburger>
        <Menu>
          <NavItems>
            <LinkStyle to="/">{navigationContent.home}</LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/quoting">{navigationContent.quoting}</LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/application">
              {navigationContent.applications}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/eligibility">
              {navigationContent.eligibilityCheck}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/appointment">
              {navigationContent.scopeOfAppointment}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <LinkStyle to="/search">
              {navigationContent.providerSearch}
            </LinkStyle>
          </NavItems>
          <NavItems>
            <Icon />
            {navigationContent.logOut}
          </NavItems>
        </Menu>
      </NavigationBar>

      {isMobile && (
        <NavItemsResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.home}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle
              to="/quoting"
              onClick={() => setIsMobile(!isMobile)}
            >
              {navigationContent.quoting}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle
              to="/application"
              onClick={() => setIsMobile(!isMobile)}
            >
              {navigationContent.applications}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle
              to="/appointment"
              onClick={() => setIsMobile(!isMobile)}
            >
              {navigationContent.scopeOfAppointment}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle
              to="/appointment"
              onClick={() => setIsMobile(!isMobile)}
            >
              {navigationContent.scopeOfAppointment}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle
              to="/search"
              onClick={() => setIsMobile(!isMobile)}
            >
              {navigationContent.providerSearch}
            </MobileLinkStyle>
          </ItemResponsive>
        </NavItemsResponsive>
      )}
    </>
  );
};

export default Navigation;
