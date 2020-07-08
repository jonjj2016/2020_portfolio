import React, { useSetate, useEffect, useState } from 'react';
import Slider from '../components/Slider';
import Aos from '../components/Aos';
import { projects } from '../data/projects';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Project from '../components/Project/Project';

import 'aos/dist/aos.css';

const Index = () => {
  const [state, setState] = useState({
    projects: projects,
    directories: ['home', 'about', 'projects', 'skills', 'contact'],
    currentDir: 'home',
  });
  const changeDir = (dir) => {
    setState({ ...state, currentDir: dir });
  };
  return (
    <BrowserRouter>
      <Aos duration={2000}>
        <Switch>
          <Route path={`/projects/:projectId`} render={() => <Project />} />
          <Route exact path='/' render={() => <Slider state={state} changeDir={changeDir}></Slider>} />
        </Switch>
      </Aos>
    </BrowserRouter>
  );
};

export default Index;
