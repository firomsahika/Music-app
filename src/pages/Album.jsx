import React, {  useEffect, useState } from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../redux/sagas/songSaga'
import { fetchAlbumRequest } from '../redux/sagas/albumFetchSaga'
import styled from 'styled-components'


const SongList = styled.div`
display: grid;
background-color: #212121;
grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
grid-gap: 20px;
border-radius:14px;
padding:10px;
align-items:center;
justify-content:center;
img{
  object-fit:cover;
  width:190px;
  height:150px;
  border-radius:8px;
}

`

const Album = () => {

  const dispatch = useDispatch();
  const albumLists = useSelector((state)=> state.song.albumList);

  useEffect(()=>{
       dispatch(fetchAlbumRequest());
  },[dispatch]);

  console.log(albumLists);

  return (
    <Content>
       <SongList >
        {
          albumLists.map((musicdata)=>(
            <div style={{backgroundColor:'#000000',paddingLeft:'2px',display:'flex',flexDirection:'column',fontSize:'13px'}}>
              <img src={musicdata.imageUrl} alt="photos" />
              <p style={{margin:'0',padding:'0',fontSize:'15px'}}>{musicdata.nameofSinger}</p>
              <p style={{margin:'0',padding:'0'}}>Title :  {musicdata.title}</p>
              <p style={{margin:'0',padding:'0'}}>Released : {musicdata.produceddate}</p>
            </div>
          ))
        }

       </SongList>
    </Content>
  )
}

export default Album;
