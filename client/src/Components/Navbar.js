import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import admin from "../Components/Images/admin.jpg";
import logo from "../Components/Images/logo.svg";
import homeIcon from "../Components/Images/home-icon.svg";
import searchIcon from "../Components/Images/search-icon.svg";
import watchIcon from "../Components/Images/watchlist-icon.svg";
import origIcon from "../Components/Images/original-icon.svg";
import movieIcon from "../Components/Images/movie-icon.svg";
import seriesIcon from "../Components/Images/series-icon.svg";
import shutdownIcon from "../Components/Images/shutdown.svg";

const Navbar = () => {

  const [Toggler, setToggler] = useState(false); // false -> notActive
  const ifPopupOpen = () => setToggler(!Toggler); // true -> activeState
    return (
        <>
          <Nav>
            <Navbrand>
              <NavLink to="/"><img src={logo} alt='disney/logo' /></NavLink>
            </Navbrand>
            <MenuLinks>
              <li><NavLink to="/home" className="nav-link"><img src={homeIcon} alt='' /><span>HOME</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={searchIcon} alt='' /><span>SEARCH</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={watchIcon} alt='' /><span>WATCHLIST</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={origIcon} alt='' /><span>ORIGINALS</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={movieIcon} alt='' /><span>MOVIES</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={seriesIcon} alt='' /><span>SERIES</span></NavLink></li>
            </MenuLinks>
            <UserAuth><img src={admin} onClick={ifPopupOpen} alt="admin/disney" /></UserAuth>

            <PopupMenu activeState={Toggler}>
              <li><NavLink to="" className="nav-link"><img src={homeIcon} alt='' /><span>Home</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img style={{width: '0.8rem', height: '0.8rem'}} src={shutdownIcon} alt='' /><span>Sign Out</span></NavLink></li>
            </PopupMenu>
          </Nav>
        </>
    )
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-height: 9vh;
  padding: 0.5rem 3rem;
  opacity: 1;
  z-index: 2500;

  @media screen and (min-width: 280px) and (max-width: 991px) {
    justify-content: space-between;
  }
`;

const Navbrand = styled.div`
  width: 101px;
  height: auto;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

`;

const MenuLinks = styled.div`

  @media screen and (min-width: 280px) and (max-width: 991px) {
      display: none;
    }

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  margin-right: auto;
  margin-left: 3rem;

  li{
      list-style: none;
      > .nav-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;

        img {
          width: 1.3rem;
          height: 1.3rem;
          object-fit: contain;
        }

        span {
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.08;
          padding: 0.5rem;
          margin-top: 5px;
          position: relative;

          &:before{
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            right: 0;
            width: 0%;
            height: 2px;
            background: #f9f9f9;
            transition: all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
        }
      }

      &:hover {
        span:before{
          width: 100%;
        }
      }

  }

`;

const UserAuth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`

  position: absolute;
  top: 7vh;
  right: 3.5rem;

  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;

  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  opacity: 1;
  z-index: 2500;

  li{
      width: 100%;
      display: flex;
      align-items: flex-start;
      border-bottom: 1.3px solid rgba(151, 151, 151, 1);

      list-style: none;
      > .nav-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;

        img {
          width: 1.3rem;
          height: 1.3rem;
          object-fit: contain;
        }

        span {
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.08;
          padding: 0.5rem;
          margin-top: 5px;
          position: relative;

}`;

export default Navbar
