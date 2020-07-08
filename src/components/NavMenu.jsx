import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
const NavMenu = () => {
  return (
    <NavWrapper>
      <div data-aos='fade-right'>
        <Icon size='big' name='react' />
      </div>

      <div data-aos='fade-left'>
        <Icon size='big' name='bars' />
      </div>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  height: 9rem;
  margin: 0 auto;
  color: #eee;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;
`;
export default NavMenu;
