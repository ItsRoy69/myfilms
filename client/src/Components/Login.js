import React from 'react';
import Banner from './Login/Banner.js';
import Stream from './Login/Stream.js';
import GroupWatch from './Login/GroupWatch.js';
import MarvelStudio from './Login/MarvelStudio.js';
import DownloadNow from './Login/DownloadNow.js';

import styled from 'styled-components';

const Login = () => {
    return (
        <>
          <Main>
            <Banner />
            <Stream />
            <GroupWatch />
            <MarvelStudio />
            <DownloadNow />
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
