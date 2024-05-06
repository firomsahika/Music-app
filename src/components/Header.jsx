import React, { useState } from "react";
import StyledHeader from "../styles/Header/Header.styled";
import Container from "../styles/Header/Container.styled";
import SearchResult from "../styles/SearchResult.styled"
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchCircleSharp } from "react-icons/io5";
import logo from "../assets/addis.jpg"
import { TbMusicHeart } from "react-icons/tb";


const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const songLists = useSelector((state) => state.song.songsList);
  const favoriteCount = useSelector((state) => state.favorite.favoriteCount);
 
  // const filteredSong = songLists.filter(
  //   (song) => song.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  //       ||
  //          song.nameofSinger.toLowerCase().includes(searchQuery.toLowerCase())
  // )
    
  return (
    <StyledHeader>
      <Container>
    {/* <p style={{fontSize:'18px'}}>Addis Music</p> */}
    {/* <img style={{width:'85px'}} src={logo} alt="logo" /> */}
  <div style={{display:'flex', position:'relative',zIndex:'10',gap:'2px',alignItems:'center'}}>
  <TbMusicHeart style={{color:'darkseagreen'}}  size={35}/>
  <p style={{color:'darkseagreen'}}>Addis Music</p>
  </div>
 
    
  

      <div style={{display:'flex', alignItems:'center', justifyContent:'center',padding:'4px'}}>
      <input
          type="text"
          value={searchQuery}
          onChange={(e) =>setSearchQuery(e.target.value)}
          placeholder="Search.."
          style={{ backgroundColor: "", position:"relative", display:'flex', width:'20rem' }}
        />

        <IoSearchCircleSharp  
        size={40}
        style={{position:"absolute", color:'black', top:'22px', right:'31rem'}}
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
            </span>
          </div>
          {/* <LuBell /> */}
        </div>
{/* 
        <div>
          
        {
          searchQuery && (
            
              filteredSong.map((song)=>(
                <div>
                  <p>{song.title}</p>
                </div>
              ))
            
          )
        }
        </div> */}


      </Container>
      <SearchResult>
          
          {/* {
            searchQuery && (
              
                filteredSong.map((song)=>(
                  <div style={{background:'white',color:'black',fontSize:'14px',cursor:"pointer",width:'25%',padding:'4px', display:'flex', flexDirection:"column",alignItems:'center'}}>
                    <p>{song.title}</p>
                    <p>{song.nameofSinger}</p>
                  </div>
                ))
              
            )
          } */}
          </SearchResult> 
    </StyledHeader>
  );
};

export default Header;