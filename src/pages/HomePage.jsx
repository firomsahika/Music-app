
import Song from "../components/Song";
import React, {  useEffect, useState } from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../redux/sagas/songSaga'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { incrementFavoriteCount } from "../redux/feature/favoriteSlice";
import SongList from "../styles/songList.styled";


const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;


const HomePage = () => {
  const dispatch = useDispatch();
  const songLists = useSelector((state) => state.song.songsList);



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