import React from 'react';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import Links from './Links';
import Img from '../assets/svg/7.svg';
import NavMenu from './NavMenu';

const About = () => {
  return (
    <Wrapper image={Img}>
      <NavMenu />
      {/* <div className='image'></div> */}
      <Links />
      {/* <div className="content">

      </div> */}
      <Typing cursor='|' startDelay='3000ms' speed={70}>
        <h1 style={{ fontSize: '5rem', textAlign: 'center', wordSpacing: '1.5rem', letterSpacing: '4px' }}>I'm JON!</h1>

        <h2 style={{ textAlign: 'center', letterSpacing: '4px', width: '30vw' }}>Full-stack web developer and javascript addicted Dev.</h2>
        {/* <h2 style={{ textAlign: 'center', letterSpacing: '4px', width: '30vw' }}>I design and code beautifully simple things, and I love what I do.</h2> */}
      </Typing>
      {/* <p>I have worked in Power Plant (YCCPP) as Power Engineer for 8 years after i graduated from Yerevan State Engineering University in 2009 . About two years ago i decided to switch to Software Engineering.</p>
        <p>I have found my passion in coding and thats what i really enjoy doing</p>
        <p>During these time i have worked on my project and made projects for my friends.</p>
        <p>For the past 8 to 9 months i have been cooperating with Jimmy Keesee from Zhongxi Education.</p>
        <h3>Currently i am looking for the place where i can hone my coding skills and work on real world applications.</h3> */}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  color: #eee;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    height: 40%;
    color: red;
    position: absolute;
    z-index: 3;
    width: 29%;
    right: 0%;

    bottom: -5%;
  }
  .content {
  }
`;
export default About;
