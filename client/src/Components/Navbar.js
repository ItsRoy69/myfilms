import React from 'react';
import logo from "../Components/Images/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
          <Nav>
            <Navbrand><img src={logo} alt='disney/logo' /></Navbrand>
            <MenuLinks>
              <li><NavLink to="" className="nav-link">Home</NavLink></li>

            </MenuLinks>
            <UserAuth></UserAuth>
          </Nav>
        </>
    )
};

const Nav = styled.nav``;
const Navbrand = styled.div``;
const MenuLinks = styled.div``;
const UserAuth = styled.div``;

export default Navbar
