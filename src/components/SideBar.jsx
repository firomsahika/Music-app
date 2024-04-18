import React from 'react'
import styled from "styled-components"
import { RiHome5Fill } from "react-icons/ri";
import { BsFileMusicFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { IoHeartHalfOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Side = styled.div`
 height:100vh;
 width:15%;
 padding:0 30px;
 display:flex;
 flex-direction:column;
 font-family:'Poppins',sans-serif;
 color: white;
 font-size:15px;
 position:fixed;
 margin-top:80px;

 div{
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:8px;
    color:white;
 }
 div:hover{
   
    width:150px;
    background-color:gray;
    border-radius:10px;
 }
 p{
  color:white
 }
`
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:15px;

  &:hover {
    color: #FFC100;
  }
  &.active {
    color: #FFC100; /* Change the color here */
    p{
      color: #FFC100;
    }
  }
`;

const SideBar = () => {
  return (
    <Side>
      <div>
      <StyledNavLink  to="/" style={{}}>
      <RiHome5Fill size={25} />
      <p>Home</p>
      </StyledNavLink >
      </div>
      <div>
       <StyledNavLink  to="/album">
       <BsFileMusicFill size={25}/>
       <p>Albums</p>
       </StyledNavLink >
      </div>
      <div>
      <StyledNavLink  to="/createsong">
      <IoIosCreate  size={25}/>
      <p>Create Song</p>
      </StyledNavLink >
      </div>
      <div>
      <StyledNavLink  to="Favorite">
      <IoHeartHalfOutline size={25} />
      <p>Favorite</p>
      </StyledNavLink >
      </div>
    </Side>
  )
}

export default SideBar