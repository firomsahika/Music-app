import React from "react";
import StyledHeader from "../styles/Header/Header.styled";
import Container from "../styles/Header/Container.styled";

import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoSearchCircleSharp } from "react-icons/io5";

const Header = () => {
  const favoriteCount = useSelector((state) => state.favorite.favoriteCount);

  return (
    <StyledHeader>
      <Container>
        <p>Logo</p>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center',padding:'4px'}}>
      <input
          type="text"
          placeholder="Search.."
          style={{ backgroundColor: "white", position:"relative", display:'flex', width:'20rem' }}
        />
        <IoSearchCircleSharp  
        size={40}
        style={{position:"absolute", color:'black', top:'22px', right:'33rem'}}
        />
      </div>
        <div>
          <div style={{ display: "flex" }}>
           <Link to='/favorite'>
            <MdFavorite
              style={{
                marginRight: "12px",
                position: "relative",
                color: "#ffa200",
              }}
              size={40}
          />
          </Link>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                padding: "2px",
                position: "absolute",
                top: "16px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                right: "48px",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              {favoriteCount}
            </span>
          </div>
          {/* <LuBell /> */}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
