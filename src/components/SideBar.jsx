import React from "react";
import styled from "styled-components";
import { RiHome5Fill } from "react-icons/ri";
import { BsFileMusicFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { IoHeartHalfOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Side from "../styles/sidebar.styled";
import StyledNavLink from "../styles/styledNavLink.styled";



const SideBar = () => {
  return (
    <Side>
      <div>
        <StyledNavLink to="/" style={{}}>
          <RiHome5Fill size={22} />
          <p>Home</p>
        </StyledNavLink>
      </div>
      <div>
        <StyledNavLink to="/album">
          <BsFileMusicFill size={22} />
          <p>Albums</p>
        </StyledNavLink>
      </div>
      <div>
        <StyledNavLink to="/createsong">
          <IoIosCreate size={22} />
          <p>Create Song</p>
        </StyledNavLink>
      </div>
      <div>
        <StyledNavLink to="Favorite">
          <IoHeartHalfOutline size={22} />
          <p>Favorite</p>
        </StyledNavLink>
      </div>
    </Side>
  );
};

export default SideBar;
