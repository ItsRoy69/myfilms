import React from 'react';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import styled from 'styled-components';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import luca from "../Images/LUCA-2.png";

const Original = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };
    return (
        <>
            <Section>
              <h1>Originals</h1>
              <Carousel {...settings}>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
                <Wrap>
                  <div><NavLink to=" "><img src={luca} alt="img/slide" /></NavLink></div>
                </Wrap>
              </Carousel>
            </Section>
        </>
    )
}

const Section = styled.section`
  padding: 0.5rem 0;

  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width: 991px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
  `;
const Carousel = styled(Slider)`
  /* dots */
  ul li button {
      &::before {
        font-size: 11px;
        color: rgb(150, 158, 171);
      }
  }

  ul li.slick-active button {
    &::before {
      color: #fff !important;
    }
  }

  /* left - right button*/
  & > button {
      opacity: 0;
      z-index: 1500;
      width: 5vw;
      height: 100%;

      &:hover {
        opacity: 1;
        z-index: 2000;
        transition: opacity 0.2s ease 0s;
      }
    }
/* slick-list */
  .slick-prev {
      left: -75px;
    }

    .slick-next {
      right: -75px;
    }

    .slick-list {
      overflow: visible;
    }

`;
const Wrap = styled.div`
  position: relative;

  div{
    border-radius: 4px;
    padding: 5px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: default;

    img {
      width: 100%;
      height: 15vh;
      object-fit: fill;
      border-radius: 4x;
      opacity: 1;
      z-index: 1500;
      position: relative;

      @media screen and (max-width: 991px) {
        width: 100%;
        object-fit: cover;
        height: auto;
      }
    }

    &:hover {
      opacity: 1;
      z-index: 2000;
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
`;
export default Original
