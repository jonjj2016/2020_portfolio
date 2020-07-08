import React, { useState, useEffect } from 'react';
import NavMenu from '../NavMenu';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Wrapper, Slider, Loader, Image, Main } from './Styled';
import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);

  const [state, setState] = useState({ project: null });

  useEffect(() => {
    const project = projects.find((proj) => proj.code === projectId);
    console.log(project);
    setState({ ...state, project });
  }, [projectId]);

  return (
    <Wrapper>
      <NavMenu />
      {state.project ? (
        <Main>
          <h1>{state.project.title}</h1>
          <Slider>
            <div className='menu'>
              <div className='circles'>
                <div className='circle red'></div>
                <div className='circle yellow'></div>
                <div className='circle green'></div>
              </div>
              <div className='title'>{state.project.title}</div>
            </div>
            <AwesomeSlider
              mobileTouch
              bullets={false}
              fillParent={false}
              animation='fallAnimation'
              startupScreen={
                <Loader>
                  <h1>Loading...</h1>
                </Loader>
              }
              buttons
              startup
              infinite={false}
              selected={0}
              style={{ height: '100%' }}
              onTransitionEnd={(e) => {
                console.log(e.currentMedia.name);
              }}>
              {state.project.images.map((image, index) => {
                console.log(image);

                return (
                  <div key={index}>
                    <Image src={`/images/projects/${projectId}/${index + 1}.png`} />
                  </div>
                );
              })}
            </AwesomeSlider>
          </Slider>
        </Main>
      ) : (
        <div style={{ height: '100%' }}>Loading</div>
      )}
    </Wrapper>
  );
};

export default Project;
