import React from 'react';
import styled from 'styled-components';

import { brandAPI } from '../API/LocalAPI.js';

const Brand = () => {
    return (
        <>
          <Container>
            {
              brandAPI && brandAPI.map((value, index) => (
                <Wrap key={index}>
                  <img src={value.imgSrc} alt="brand" />
                  <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src={value.videoSrc} type="video/mp4"></source>
                  </video>
                </Wrap>
              ))
            }
          </Container>
        </>
    )
}

const Container = styled.section`
  margin-top: 31px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
`;
const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 10px;
  cursor: default;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  object-position: center;
  border: 4px solid rgb(249, 249, 249, 0.1);

  img {
    inset: 0px;
    height: 100%;
    object-fit: cover;
    width: 100%;
    opacity: 1;
    z-index: 1500;
    display: block;
    border-radius: 10px;
    transition: opacity 500ms ease-in-out 0s;
    position: absolute;
    top: 0;
  }

  video {
    height: 100%;
    object-fit: cover;
    width: 100%;
    opacity: 0;
    z-index: 0;
    display: block;
    position: absolute;
    top: 0px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
      z-index: 1;
    }
`;

export default Brand;
