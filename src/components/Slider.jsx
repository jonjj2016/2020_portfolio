import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import About from './About';
import Projects from './Projects';
import NavMenu from './NavMenu';

const Slider = ({ state, changeDir }) => {
  const onTransitionRequest = (e) => {
    const { currentIndex, currentMedia, eventName, nextIndex, nextMedia, nextSlide, slides } = e;
    changeDir(nextMedia);
  };
  return (
    <div style={{ backgroundColor: '#000', position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 1, top: 0, left: 0, height: '100vh' }}>
        <AwesomeSlider
          bullets={false}
          fillParent
          startupScreen={<h1>Loading...</h1>}
          buttons
          startup
          fillParent={true}
          style={{ height: '100vh' }}
          animation='cubeAnimation'
          onTransitionRequest={onTransitionRequest}
          buttonContentLeft={() => alert('ko')}
          buttonContentRight='Next'
          selected={2}
          onTransitionEnd={(e) => {
            console.log(e.currentMedia.name);
          }}>
          <div name='home' style={{ height: '100%', width: '100%' }}>
            <About />
          </div>
          <div name='about' style={{ height: '100%', width: '100%', backgroundColor: '#222' }} />
          <div name='projects'>
            <Projects state={state}></Projects>
          </div>
          <div name='skills' data-src='/path/to/image-2.jpg' />
          <div name='contact' data-src='/path/to/image-2.jpg' />
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Slider;
