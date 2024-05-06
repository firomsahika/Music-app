import React,{useEffect} from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDataRequest } from '../redux/sagas/songSaga'
import { fetchDetailSong } from '../redux/sagas/SongDetailSaga'
import { songDetailRequest } from '../redux/feature/songDetailSlice'
import { deleteSongRequest } from '../redux/sagas/deleteSongSaga'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { updateSongRequest } from '../redux/sagas/updateSongSaga'
import DetailWrapper from '../styles/detailWrapper.styled'
import Button from '../styles/button.styled'


const SongDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const song = useSelector((state)=> state.songDetail.song);
  
  useEffect(()=>{
    dispatch(fetchDetailSong(id))
  },[dispatch,id]);
  console.log(id)
  console.log(song);

  const handleDelete = () =>{
    dispatch(deleteSongRequest(id));
  }
  const handleUpdate = () =>{
    dispatch(updateSongRequest(id));
  }

  return (
    <Content>
       <DetailWrapper>
        <div>
          <img src={song.imageUrl} alt="" />
        </div>
        <div>
          <p>Singer : {song.nameofSinger}</p>
          <p>Title : {song.title}</p>
          <p>Genre : {song.genre}</p>
          <p>Produced-Date : {song.produceddate}</p>

          <Link to={`/update-song/${id}`}>
             <Button 
             onClick={handleUpdate}
             style={{marginRight:'10px'}}>Update</Button>
          </Link>
          <Link to="/">
          <Button onClick={handleDelete}>Delete</Button>
          </Link>
        </div>
        
       </DetailWrapper>
      
    </Content>
  )
}

export default SongDetail
