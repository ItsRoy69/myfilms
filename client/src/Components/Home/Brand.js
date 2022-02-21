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

  }
  @media screen and (max-width: 767px)  {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 11px;
    gap: 11px;
  }
`;
const Wrap = styled.div`

  img {

  }

  video {

  }

  &:hover {
    
`;

export default Brand;
