import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import dbConfig from '../Firebase.js';

import playIcon from "../Components/Images/play-icon-black.png";
import trailIcon from "../Components/Images/play-icon-white.png";
import groupIcon from "../Components/Images/group-icon.png";

const Detail = () => {
  const { id } = useParams();
   const [Detail, setDetail] = useState();
   useEffect(() => {
       dbConfig.collection("Movies").doc(id).get().then((doc) => {
           if (doc.exists) {
               setDetail(doc.data());
           } else {
               console.log("Detail can't fetched");
           }
       })
   }, [id]);

    return (
        <>
        <Background>
          <Container>
            <Content>
              <ImageTitle>
                <img src="https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUOau78xVvWb7gagB7UlKDbxSqJ7x9cq5M8si8BAvitKMKNUCa_XdvBMg8N-Lwf-r-DpP4Y8YjchuQax1vPRbz-04R-tyLcG4X4d.png?r=6dd" alt="detail/imagetitle"/>
              </ImageTitle>
              <h2>2019 | 7+ | 1h 47m | US Movies</h2>
              <p>The adventures of Master Builder Emmet continue! When Lego Duplo aliens kidnap Lucy and Batman, he must head out into space to save the day.</p>

              <ButtonGroup>
                  <PlayBtn>
                    <img src={playIcon} alt="play/icon" />
                    <span>PLAY</span>
                  </PlayBtn>
                  <TrailerBtn>
                    <img src={trailIcon} alt="trail/icon" />
                    <span>TRAILER</span>
                  </TrailerBtn>
                  <AddtoPlaylistBtn>
                    <span></span>
                    <span></span>
                  </AddtoPlaylistBtn>
                  <GroupWatchBtn>
                    <img src={groupIcon} alt="group/icon" />
                  </GroupWatchBtn>
              </ButtonGroup>
            </Content>
          </Container>
        </Background>
        </>
    )
}

const Background = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.4)),
  url("https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABULERER_SpN4aHU8RiDI2msvkcAZ0b9gO3HuL_CK5IUogPCezZLZFGIXf_X266VUi0-uq_hept845Sof_GSxwMMf71JP.jpg?r=120") center/cover no-repeat;
  min-height: 95vh;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;

const Container = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
`;

const ImageTitle = styled.div`
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (min-width: 550px) and (max-width: 1200px) {
   max-width: 325px;
   }
  @media screen and (min-width: 375px) and (max-width: 550px) {
     max-width: 250px;
   }
  @media screen and (min-width: 280px) and (max-width: 375px) {
     max-width: 150px;
   }

`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  min-height: 95vh;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 550px) {
    min-height: 55vh;
    object-fit: fill;
  }

  h2{
      color: #fff;
      font-size: 1.2rem;
      font-weight: 500 !important;

      @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
      }
      @media screen and (min-width: 375px) and (max-width: 550px) {
        font-size: 0.75rem;
      }
      @media screen and (min-width: 280px) and (max-width: 375px) {
        font-size: 0.7rem;
        max-width: 250px;
      }
  }

  p{
    line-height: 1.4;
    font-size: 20px;
    padding: 1rem 0;
    color: #f9f9f9;
    max-width: 650px;
    width: 100%;
    height: auto;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
      max-width: 550px;
    }
    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.75rem;
      padding: 0.5rem 0;
      max-width: 400px;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.75rem;
      padding: 0.3rem 0;
      max-width: 400px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
 `;

const PlayBtn = styled.button`
  cursor: default;
  outline: none;
  border: 1px solid rgba(249, 249, 249, 1);
  background: rgba(249, 249, 249, 1);
  border-radius: 0.345rem;
  padding: 0.5rem 1.5rem;
   margin-right: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media screen and (min-width: 550px) and (max-width: 1200px) {
    padding: 0.5rem 1.5rem;
  }
  @media screen and (min-width: 375px) and (max-width: 550px) {
    padding: 0.5rem 1rem;
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    padding: 0.4rem 0.7rem;
    border-radius: 0.145rem;
    margin-right: 13px;
    background: #f9f9ff;
  }

  img{
    width: 32px;
    height: auto;
    opacity: 1;
    z-index: 1500;
    object-fit: contain;

    @media screen and (min-width: 550px) and (max-width: 1200px) {
      width: 25px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      width: 19px;
    }
  }

  span {
   color: #000;
   font-size: 1.2rem;
   font-weight: 400 !important;
   text-transform: uppercase;
   line-height: 1.08;
   letter-spacing: 1px;

   @media screen and (min-width: 550px) and (max-width: 1200px) {
      font-size: 1rem;
    }
   @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.8rem;
    }
   @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.8rem;
    }
`;

const TrailerBtn = styled(PlayBtn)`
  color: rgb(249, 249, 249, 1);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(249, 249, 249, 1);
  text-transform: uppercase;
  span {
    color: #fff !important;
  }
  &:hover {
    color: #000 !important;
    background: rgb(198, 198, 198);
  }
`;
const AddtoPlaylistBtn = styled.button`
   height: 41px;
   width: 41px;
   display: flex;
   cursor: pointer;
   margin-right: 22px;
   align-items: center;
   flex-direction: row;
   justify-content: center;
   border-radius: 50%;
   border: 2px solid white;
   background-color: rgba(0, 0, 0, 0.5);

   @media screen and (min-width: 550px) and (max-width: 1200px) {
     height: 35px;
     width: 35px;
   }

   @media screen and (min-width: 280px) and (max-width: 550px) {
     height: 29px;
     width: 29px;
     margin-right: 13px;
   }

   span {
     background-color: rgb(249, 249, 249);
     display: inline-block;
     &:first-child {
       height: 2px;
       width: 16px;
       transform: translate(1px, 0px) rotate(0deg);
       @media screen and (min-width: 280px) and (max-width: 550px) {
         width: 15px;
       }
     }

     &:nth-child(2) {
       width: 2px;
       height: 16px;
       transform: translate(-8px) rotate(0deg);
       @media screen and (min-width: 280px) and (max-width: 550px) {
         height: 13px;
       }
      }
    }

`;
const GroupWatchBtn = styled.button`
   height: 41px;
   width: 41px;
   display: flex;
   border-radius: 50%;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   background: white;
   background: rgba(0, 0, 0, 0.5);
   border: 2px solid #fff;
   @media screen and (min-width: 280px) and (max-width: 1200px) {
     height: 35px;
     width: 35px;
   }
   img {
     width: 100%;
     height: auto;
     object-fit: contain;
     @media screen and (min-width: 550px) and (max-width: 1200px) {
       height: 29px;
       width: 29px;
     }
     @media screen and (min-width: 280px) and (max-width: 550px) {
       height: 23px;
       width: 23px;
     }
   }
 `;

export default Detail
