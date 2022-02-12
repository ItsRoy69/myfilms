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
                <button type='button' className='links'>Sign Up for Disney+ only</button>
                <button type='button' className='links text-gray'>$7.99/month</button>
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

  @media screen and (min-width: 768px) and (max-width: 1200px){
    height: 85vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px){
    height: 75vh;
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  `;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px){
    height: 550px;
  }

  @media screen and (min-width: 550px) and (max-width: 767px){
    height: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px){
    height: 350px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 280px) and (max-width: 767px){
    height: auto;
    margin-top: 13vh;
  }

  h4{
    color: #fff;
    margin-bottom: 1ch 0;
  }

  img{
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }

  > .get-bundle-btn {
    outline: none;
    border: none;
    padding: 11.5px 15px;
    width: 100%;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 0.145rem;
    transition: all 0.7s ease-in-out;

    @media screen and (min-width: 550px) and (max-width: 1200px){
      padding: 10px 0;
      font-size: 15px
    }

    @media screen and (min-width: 280px) and (max-width: 550px){
      padding: 5px 0;
      font-size: 14px
    }

    &:hover {
    background: #0085ff;
    }
  }

  > .links{
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;

  }

  > .text-gray {
    color: #808080;
  }
`;

export default Banner
