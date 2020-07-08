import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import NavMenu from './NavMenu';
import Card from './ProjectCard/ProjectCard';

const Projects = ({ state }) => {
  return (
    <Wrapper>
      <NavMenu />
      <div className='content'>
        <h2>React developer portfolio</h2>
        <p>My recent projects...</p>
        <hr />
        <div className='skills'></div>
        <div className='projects'>
          {state.projects.map((project, index) => (
            <Card project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  position: relative;
  width: 100vw;
  color: #8a8a8a;
  .content {
    width: 80%;
    height: 100%;

    margin: 0 auto;
    padding: 10rem;
    h2 {
      word-spacing: 1.5rem;
      letter-spacing: 0.3rem;
      font-size: 4rem;
      text-transform: uppercase;
    }
    hr {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    .projects {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 2rem;
    }
  }
`;
export default Projects;
