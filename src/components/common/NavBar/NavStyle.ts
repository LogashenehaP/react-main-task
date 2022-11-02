import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
export const NavigationBar = styled.nav`
  padding: 20px;
  background: #286ce2;
  color: white;
  border-bottom: 2px solid lightskyblue;
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  @media (max-width: 768px) {
    padding: 20px;
    left: 0;
    width: 70%;
    height: 100%;
    background-color: lightgrey;
    color: black;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    z-index: 1;
  }
`;
export const NavItemsResponsive = styled.nav`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100%;
  top: 50px;
  bottom: 0;
  left: 0;
  flex-direction: column;
  transition: all 1s ease-out;
  padding: 20px;
  background: white;
  color: black;
  z-index: 1;
`;

export const ItemResponsive = styled.div`
  &:hover {
    background-color: blue;
    color: black;
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavItems = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled(FiLogOut)`
  padding-top: 5px;
  padding-right: 5px;
`;

export const Text = styled.p`
  text-decoration: none;
  color: black;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  @media (max-width: 768px) {
    padding: 15px;
    color: black;
    text-align: center;
  }
`;
export const MobileLinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
