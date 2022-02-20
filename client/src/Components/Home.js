import React from 'react';
import styled from 'styled-components';
import Banner from './Home/Banner.js';
import Brand from './Home/Brand.js';

import bgImg from "../Components/Images/background.png";

const Home = () => {
    return (
        <>
          <Container>
            <Banner />
            <Brand />
          </Container>
        </>
    )
}
const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;
  display: block;
  background: url(${bgImg})center/cover no-repeat;
`;

export default Home;
