
import Song from "../components/Song";
import React, {  useEffect, useState } from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../redux/songSaga'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { incrementFavoriteCount } from "../redux/feature/favoriteSlice";

const SongList = styled.div`
display: grid;
background-color: #212121;
min-width:85%;
grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
grid-gap: 10px;
// color:#FFC100;
color: #bababa;
border-radius:40px;
padding:16px;
align-items:center;
justify-content:center;
img{
  object-fit:cover;
  width:190px;
  height:150px;
  border-radius:8px;
  padding-bottom:15px;
}
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;





const HomePage = () => {
  const dispatch = useDispatch();
  const songLists = useSelector((state) => state.song.songsList);

  // const filteredSongs = songLists.filter(
  //   (song) =>
  //     song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     song.nameofSinger.toLowerCase().includes(searchQuery.toLowerCase())
  // );

//   const handleToggleFavorite = () => {
//     dispatch(incrementFavoriteCount());
//  };

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <Content>
      <SongList>
      {songLists.map((songData) => (
        <Song key={songData.id} songData={songData} />
      ))}
      </SongList>
    </Content>
  );
};

export default HomePage;