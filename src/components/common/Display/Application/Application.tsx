import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ApplicationContainer, Heading } from './ApplicationStyle';
import { navigationContent, textContent } from '../../../../resources/String';
import { LinkStyle } from './ApplicationStyle';

function Application() {
  return (
    <>
      <ApplicationContainer>
        <LinkStyle to="applications">
          <Heading>{navigationContent.applications}</Heading>
        </LinkStyle>
        <LinkStyle to="applicationMoreInfo">
          <Heading>{navigationContent.ApplicationRequiring}</Heading>
        </LinkStyle>
        <LinkStyle to="applicationProspect">
          <Heading>{navigationContent.prospect}</Heading>
        </LinkStyle>
      </ApplicationContainer>
      <Outlet />
    </>
  );
}

export default Application;
