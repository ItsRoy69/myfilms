import React from 'react';
import styled from 'styled-components';
import Banner from './Home/Banner.js';
import Brand from './Home/Brand.js';
import Original from './Home/Original.js';
import Trending from './Home/Trending.js';
import NewtoDisney from './Home/NewtoDisney.js';
import Hollywood from './Home/Hollywood.js';
import DisneyKid from './Home/DisneyKid.js';
import Popular from './Home/Popular.js';

import bgImg from "../Components/Images/background.png";

const Home = () => {
    return (
        <>
          <Container>
            <Banner />
            <Brand />
            <Original />
            <NewtoDisney />
            <Trending />
            <Hollywood />
            <DisneyKid />
            <Popular />
          </Container>
        </>
    )
}
const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  display: block;
  background: url(${bgImg})center/cover no-repeat;
`;

export default Home;
