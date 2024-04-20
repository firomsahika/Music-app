import React, {  useEffect, useState } from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../redux/songSaga'
import {AlbumWrapper} from '../styles/Home/AlbumWrapper.styled'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const SongList = styled.div`
display: grid;
background-color: #212121;
grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
grid-gap: 30px;
color:#FFC100;
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
  const songLists = useSelector((state)=> state.song.songsList);

  useEffect(()=>{
       dispatch(fetchDataRequest());
  },[dispatch]);

  console.log(songLists);

  return (
    <Content>
  
       <SongList >
        
        {
          songLists.map((musicdata)=>(
            <StyledNavLink to={`/song/:${musicdata.id}`}>
              <div key={musicdata.id} style={{backgroundColor:'#000000',paddingLeft:'5px',display:'flex',flexDirection:'column',fontSize:'13px',borderRadius:'10px'}}>
              <img src={musicdata.imageUrl} alt="photos" />
              <p style={{margin:'0',padding:'0 4px',fontSize:'15px'}}>{musicdata.nameofSinger}</p>
              <p style={{margin:'0',padding:'4px'}}>Title :  {musicdata.title}</p>
              <p style={{margin:'0',padding:'4px'}}>Released : {musicdata.produceddate}</p>
            </div>
            </StyledNavLink>
          ))
        }

       </SongList>
      
    </Content>
  )
}

export default HomePage;
