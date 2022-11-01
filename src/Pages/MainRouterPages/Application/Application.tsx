import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ApplicationContainer, Heading } from './ApplicationStyle';
import { navigationContent, textContent } from '../../../resources/String';
import { LinkStyle } from './ApplicationStyle';

const Application = () => {
  return (
    <>
      <ApplicationContainer>
        <LinkStyle to="">
          <Heading>{navigationContent.applications}</Heading>
        </LinkStyle>
        <LinkStyle to="applicationmoreinfo">
          <Heading>{navigationContent.ApplicationRequiring}</Heading>
        </LinkStyle>
        <LinkStyle to="applicationprospect">
          <Heading>{navigationContent.prospect}</Heading>
        </LinkStyle>
      </ApplicationContainer>
      <Outlet />
    </>
  );
};

export default Application;
