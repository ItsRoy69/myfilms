import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerAPI } from '../API/LocalAPI.js';

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
    return (
        <>

          <CarouselImg {...settings}>{/*First Dot = Value, Second dot = Index, Third dot = Array*/}
            {
              bannerAPI && bannerAPI.map((value, index) => (
                  <Wrap key={index}>
                    <div><img src={value.bannerImg} alt="banner/img"/></div>
                  </Wrap>
                ))
            }

          </CarouselImg>
        </>
    )
}

const CarouselImg = styled(Slider)`
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
  position: display;

  div{
    border-radius: 4px;
    padding: 4px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: default;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4x;
    }

    &:hover {
      padding: 1px;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;
export default Banner
