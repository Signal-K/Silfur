import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Container = styled.div`
  background-color: ${({theme}) => theme.secondary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Sidebar = () => {
  return (
    <Container>
      <Profile />
    </Container>
  )
}

export default Sidebar