import React from 'react'
import StyledHeader from '../styles/Header/Header.styled';
import Container from '../styles/Header/Container.styled';
import { LuBell } from "react-icons/lu";
import { FaSearch } from 'react-icons/fa';
import { FaClover } from 'react-icons/fa6';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <p>Logo</p>
         <input type="text" placeholder="Search.." />
         <div >
         <MdFavoriteBorder style={{marginRight:'12px'}}/>
         <LuBell />
         </div>
      </Container>
    </StyledHeader>
  )
}

export default Header
