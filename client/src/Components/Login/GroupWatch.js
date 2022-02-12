import React from 'react';

import styled from 'styled-components';

const GroupWatch = () => {
    return (
        <>
          <Section>
                  <Container>
                      <Content>
                          <h1 className="disney-titles">Virtual Movie Nights with</h1>
                          <h1 className="disney-titles">GroupWatch</h1>
                          <li>Watch togather, even when apart</li>
                          <li>Stream with up to 6 friends</li>
                          <li>Pause, rewind, react togather</li>
                          <li>Easy setup and Sharing</li>
                      </Content>
                  </Container>
              </Section>
        </>
    )
};

const Section = styled.section``;
const Container = styled.div``;
const Content = styled.div``;
export default GroupWatch
