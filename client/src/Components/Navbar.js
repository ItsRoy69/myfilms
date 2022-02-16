import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../Components/Images/logo.svg";
import homeIcon from "../Components/Images/home-icon.svg";
import searchIcon from "../Components/Images/search-icon.svg";
import watchIcon from "../Components/Images/watchlist-icon.svg";
import origIcon from "../Components/Images/original-icon.svg";
import movieIcon from "../Components/Images/movie-icon.svg";
import seriesIcon from "../Components/Images/series-icon.svg";

const Navbar = () => {
    return (
        <>
          <Nav>
            <Navbrand><img src={logo} alt='disney/logo' /></Navbrand>
            <MenuLinks>
              <li><NavLink to="" className="nav-link"><img src={homeIcon} alt='' /><span>HOME</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={searchIcon} alt='' /><span>SEARCH</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={watchIcon} alt='' /><span>WATCHLIST</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={origIcon} alt='' /><span>ORIGINALS</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={movieIcon} alt='' /><span>MOVIES</span></NavLink></li>
              <li><NavLink to="" className="nav-link"><img src={seriesIcon} alt='' /><span>SERIES</span></NavLink></li>
            </MenuLinks>
            <UserAuth></UserAuth>
          </Nav>
        </>
    )
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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
const UserAuth = styled.div``;

export default Navbar
