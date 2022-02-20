import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import img1 from "../Images/viewers-disney.png";
import img2 from "../Images/viewers-pixar.png";
import img3 from "../Images/viewers-marvel.png";
import img4 from "../Images/viewers-starwars.png";
import img5 from "../Images/viewers-national.png";
import img6 from "../Images/DSNY_STAR_LOGO_LIGHT_RGB.png";

import videoBrand1 from "../videos/1564674844-disney.mp4";
import videoBrand2 from "../videos/1564676714-pixar.mp4";
import videoBrand3 from "../videos/1564676115-marvel.mp4";
import videoBrand4 from "../videos/1608229455-star-wars.mp4";
import videoBrand5 from "../videos/1564676296-national-geographic.mp4";
import videoBrand6 from "../videos/star_on_disney2021.mp4";

const Brand = () => {
    return (
        <>
          <Wrap>
            <img src={img1} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand1} type="video/mp4"></source>
            </video>
          </Wrap>
          <Wrap>
            <img src={img2} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand2} type="video/mp4"></source>
            </video>
          </Wrap>
          <Wrap>
            <img src={img3} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand3} type="video/mp4"></source>
            </video>
          </Wrap>
          <Wrap>
            <img src={img4} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand4} type="video/mp4"></source>
            </video>
          </Wrap>
          <Wrap>
            <img src={img5} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand5} type="video/mp4"></source>
            </video>
          </Wrap>
          <Wrap>
            <img src={img6} />
            <video autoPlay={true} loop={true} playsInline={true} muted={true}>
              <source src={videoBrand6} type="video/mp4"></source>
            </video>
          </Wrap>
        </>
    )
}

const Wrap = styled.div``;
export default Brand
