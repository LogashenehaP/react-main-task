import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
export const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #286ce2;
  color: white;
  border-bottom: 2px solid lightskyblue;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
export const NavItemsResponsive = styled.nav`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  top: 50px;
  right: 0;
  flex-direction: column;
  transition: all 1s ease-out;
  padding: 20px;
  background: grey;
  color: white;
  z-index: 1;
`;

export const ItemResponsive = styled.div`
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const NavigationBarResponsive = styled.nav`
  display: flex;
  justify-content: flex-end;
  display: none;
  @media (max-width: 768px) {
    display: flex;
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
`;

export const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;
