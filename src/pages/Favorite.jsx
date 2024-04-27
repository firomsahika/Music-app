import React from "react";
import Content from "../styles/Home/HomeContainer.styled";
import styled from "styled-components";
import { useSelector } from "react-redux";

const SongList = styled.div`
display: grid;
background-color: #212121;


grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
grid-gap: 10px;
// color:#FFC100;
color: #bababa;
border-radius:40px;
padding:18px;
align-items:center;
justify-content:center;
img{
  object-fit:cover;
  width:210px;
  height:150px;
  border-radius:8px;
  padding-bottom:15px;
}
`;

const Favorite = () => {
  const favoriteSongs = useSelector((state) => state.favorite.favorites);

  return (
    <Content>
      <SongList>
        {/* <div style={{display:'flex', gap:'10px'}} > */}
          {favoriteSongs.map((song) => (
            <div
              key={song.id}
              style={{
                backgroundColor: "#000000",
                paddingLeft: "5px",
                display: "flex",
                flexDirection: "column",
                fontSize: "13px",
                borderRadius: "10px",
              }}
            >
              <img src={song.imageUrl} alt="" />
              <p style={{color:'#ffa200',paddingBottom:'0px'}}>Title: {song.title}</p>
              <p style={{paddingBottom:'0px'}}>Singer: {song.nameofSinger}</p>
              <p>Genre: {song.genre}</p>
              <p>Produced:{song.produceddate}</p>
            </div>
          ))}
        {/* </div> */}
      </SongList>
    </Content>
  );
};

export default Favorite;
