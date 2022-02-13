import React from 'react';
import Banner from './Login/Banner.js';
import Stream from './Login/Stream.js';
import GroupWatch from './Login/GroupWatch.js';
import MarvelStudio from './Login/MarvelStudio.js';
import GridTheme from './Login/GridTheme.js';
import DownloadNow from './Login/DownloadNow.js';
import Devices from './Login/Devices.js';
import Advertise from './Login/Advertise.js';

import styled from 'styled-components';

const Login = () => {
    return (
        <>
          <Main>
            <Banner />
            <Stream />
            <GroupWatch />
            <MarvelStudio />
            <GridTheme />
            <DownloadNow />
            <Advertise />
            <Devices />
          </Main>
        </>
    )
}
const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;
export default Login
