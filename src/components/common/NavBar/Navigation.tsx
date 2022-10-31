import React from 'react';
import {
  NavigationBar,
  NavigationBarResponsive,
  NavItems,
  Text,
  LinkStyle,
  MobileLinkStyle,
  Icon,
} from './NavStyle';
import { navigationContent } from '../../../resources/String';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItemsResponsive, ItemResponsive } from './NavStyle';
function Navigation() {
  const [isMobile, setIsMobile] = useState(false);
  function handleChange() {
    setIsMobile(!isMobile);
  }
  return (
    <>
      <NavigationBar>
      <NavigationBarResponsive>
          <div onClick={() => handleChange()}>
            {isMobile ? <ImCross /> : <FaBars />}
          </div>
        </NavigationBarResponsive>
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
            {navigationContent.eligibility_Check}
          </LinkStyle>
        </NavItems>
        <NavItems>
          <LinkStyle to="/appointment">
            {navigationContent.scope_Of_Appointment}
          </LinkStyle>
        </NavItems>
        <NavItems>
          <LinkStyle to="/search">
            {navigationContent.provider_Search}
          </LinkStyle>
        </NavItems>
        <NavItems>
          <Icon />
          {navigationContent.logOut}
        </NavItems>
        
      </NavigationBar>
      {isMobile && (
        
        <NavItemsResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.home}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/quoting" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.quoting}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/application" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.applications}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/appointment" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.scope_Of_Appointment}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/appointment" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.scope_Of_Appointment}
            </MobileLinkStyle>
          </ItemResponsive>
          <ItemResponsive>
            <MobileLinkStyle to="/search" onClick={() => setIsMobile(!isMobile)}>
              {navigationContent.provider_Search}
            </MobileLinkStyle>
          </ItemResponsive>
        </NavItemsResponsive>
      )}
    </>
  );
}

export default Navigation;
