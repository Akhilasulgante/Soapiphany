import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  //background-color: red;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  position: relative;
  //background-color: green;
`;

export const NavBarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: black;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const logoImg = styled.img`
  /* margin: 10px;
  max-width: 200px;
  height: auto; */

  width: 15rem;
  height: 100%;
  position: absolute;
  object-fit: fill;
`;
