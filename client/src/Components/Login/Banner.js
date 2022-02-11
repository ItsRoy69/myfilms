import React from 'react';
import styled from 'styled-components';

import logo from '../Images/cta-logo-one.svg';
import logo2 from '../Images/cta-logo-two.png';

const Banner = () => {
    return (
        <>
            <Background>
              <Container>
                <Content>
                <img src={logo} alt="logo/img" />
                <button type='button' className='get-bundle-btn'>Get The Disney Bundle</button>
                <h4>Stream Now: Terms Apply</h4>
                <img src={logo2} alt="logo2/img" />
                <button type='button' className='links'>Sign Up fot Disney+ only</button>
                <button type='button' className='links text-gary'>$7.99/month</button>
                </Content>
              </Container>
            </Background>
        </>
    )
};
const Background = styled.section`
  background:url("https://disney-clone-d1e27.web.app/images/login-background.jpg")center/cover no-repeat;
  height: 95vh;

  display: flex;
  align-items: center;
  flex-directin: column;
  justify-content: center;
  `;
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  `;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: ;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img{
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
  }
  > .get-bundle-btn {
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export default Banner
