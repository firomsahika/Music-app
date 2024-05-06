import React, { useState } from "react";
import StyledHeader from "../styles/Header/Header.styled";
import Container from "../styles/Header/Container.styled";
import SearchResult from "../styles/SearchResult.styled";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoHeartHalfOutline, IoSearchCircleSharp } from "react-icons/io5";
import { TbMusicHeart } from "react-icons/tb";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import FavCount from "../styles/FavoriteCount.styled";
import { BiFullscreen } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import StyledNavLink from "../styles/styledNavLink.styled";
import { RiHome5Fill } from "react-icons/ri";
import { BsFileMusicFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [toggle, setToggle] = useState(false);
  const songLists = useSelector((state) => state.song.songsList);
  const favoriteCount = useSelector((state) => state.favorite.favoriteCount);

  const filteredSong = songLists.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.nameofSinger.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleToggle = () =>{
    setToggle(!toggle);
  }

  return (
    <StyledHeader>
      <Container>
        <div
          style={{
            display: "flex",
            position: "relative",
            zIndex: "10",
            gap: "2px",
            alignItems: "center",

          }}
        >
          <TbMusicHeart style={{ color: "darkseagreen" }} size={35} />
          <p style={{ color: "darkseagreen" ,

             ...(window.innerWidth <= 768 && { 
               display:'none'
           })
          }}>Addis Music</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px",
            ...(window.innerWidth <= 768 && { 
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              gap:'10px',
              width:'20px',
              paddingRight:'0',
              marginLeft:'50px',
             })
            
          }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search.."
            style={{
              position: "relative",
              display: "flex",
              width: "20rem",
              
            }}
          />

          <IoSearchCircleSharp
            size={40}
            style={{
              position: "absolute",
              color: "black",
              top: "22px",
              right: "28rem",
            }}
          />
        </div>
        <div>
          <div style={{ display: "flex",  ...(window.innerWidth <= 768 && { 
               display:'none'
           })}}>
            <Link to="/favorite">
              <MdFavorite
                style={{

                  marginRight: "12px",
                  position: "relative",
                  color: "#ffa200",
                }}
                size={40}
              />
            </Link>
            <FavCount
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                padding: "2px",
                position: "absolute",
                top: "10px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                right: "26px",
                backgroundColor: "white",
                borderRadius: "50%",
                
              }}
            >
              {favoriteCount}
            </FavCount>
          </div>
          {/* <LuBell /> */}
        </div>
        <div onClick={handleToggle} 
        style={
          {
            display:'none',
          
            ...(window.innerWidth <= 768 && { 
              display:'flex',
          
             
             })
          }
        }
        >
        { toggle ?  <IoCloseCircleOutline size={50} /> : <MdMenuOpen size={50}/>}

        {
          toggle && (
            <div style={
              {
                backgroundColor:'white',
                position:"absolute",
                color:'black',
                top:'70px',
                width:'100%',
                
                height:'35vh',
                right:"20px",
                listStyle:'none',
                display:'flex',
                alignItems:'start',
                justifyContent:'start',
                flexDirection:'column',
                gap:'20px',
                
              }
            }>
              <ul style={{listStyle:'none'}}>
                <StyledNavLink to="/">
                <RiHome5Fill size={22} />
                Home
               </StyledNavLink>
                
                <StyledNavLink to='/album'>
                <BsFileMusicFill size={22} />Albums</StyledNavLink>
                <StyledNavLink to="/createsong">
                <IoIosCreate size={22} />
                  Create Song</StyledNavLink>
                <StyledNavLink to="/favorite">
                <IoHeartHalfOutline size={22} />
                  Favorites</StyledNavLink>
              </ul>
            </div>
          )
        }
        </div>
      </Container>
      <SearchResult>
        {searchQuery &&
          filteredSong.map((song) => (
            <div
              style={{
                background: "white",
                color: "black",
                fontSize: "14px",
                cursor: "pointer",
                width: "25%",
                padding: "4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              
              }}
            >
              <p>{song.title}</p>
              <p>{song.nameofSinger}</p>
            </div>
          ))}
      </SearchResult>
      
    </StyledHeader>
  );
};

export default Header;
