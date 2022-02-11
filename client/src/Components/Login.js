import React from 'react'
import Banner from './Login/Banner.js'
import styled from 'styled-components';

const Login = () => {
    return (
        <>
          <Main>
            <Banner />
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
