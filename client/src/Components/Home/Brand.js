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

const Container = styled.section``;
const Wrap = styled.div``;
export default Brand
