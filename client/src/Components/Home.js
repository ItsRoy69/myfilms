import React, { useEffect } from 'react';
import styled from 'styled-components';
import dbConfig from "../Firebase.js";
import { setDisneyMovies } from './Redux/Reducers/MovieReducer.js';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  let populars =[];
  let hollywoods =[];
  let newTos =[];
  let kidsTvs =[];
  let originals =[];
  let trending =[];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      // console.log(doc.data().type);

      switch (doc.data().type) {
                    case "popular":
                        populars = [...populars, { id: doc.id, ...doc.data() }];
                        break;
                    case "hollywood":
                        hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
                        break;
                    case "newTo":
                        newTos = [...newTos, { id: doc.id, ...doc.data() }];
                        break;
                    case "kidsTv":
                        kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
                        break;
                    case "original":
                        originals = [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case "trending":
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;
                    default:
                        break;
                }
            });
            dispatch(setDisneyMovies({
                            popular: populars,
                            hollywood: hollywoods,
                            newTo: newTos,
                            kidsTv: kidsTvs,
                            original: originals,
                            trending: trending
                        }))
                    });
                }, []);

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
 top: 10px;
 margin-bottom: 11vh;

 &:before {
   background: url(${bgImg}) center center / cover no-repeat fixed;
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -10;
 }
`;

export default Home;
