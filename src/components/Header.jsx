import React from 'react'
import StyledHeader from '../styles/Header/Header.styled';
import Container from '../styles/Header/Container.styled';
import { LuBell } from "react-icons/lu";
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <p>Logo</p>
         <input type="text" placeholder="Search.." />
         <LuBell />
      </Container>
    </StyledHeader>
  )
}

export default Header
