import React, {  useEffect, useState } from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataRequest } from '../redux/songSaga'
import { fetchAlbumRequest } from '../redux/albumFetchSaga'

const Album = () => {

  const dispatch = useDispatch();
  const albumLists = useSelector((state)=> state.song.albumList);

  useEffect(()=>{
       dispatch(fetchAlbumRequest());
  },[dispatch]);

  console.log(albumLists);

  return (
    <Content>
       <div >
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

       </div>
    </Content>
  )
}

export default Album;
