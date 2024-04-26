import React,{useEffect} from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDataRequest } from '../redux/songSaga'
import { fetchDetailSong } from '../redux/SongDetailSaga'
import { songDetailRequest } from '../redux/feature/songDetailSlice'
import { deleteSongRequest } from '../redux/deleteSongSaga'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { updateSongRequest } from '../redux/updateSongSaga'

const DetailWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:40px;
  color:white;
  background-color: black;
  height:84vh;
  
  img{
    width:300px;
    height:350px;
    object-fit:cover;
    border-radius:15px;
  }
  p{
    font-size:20px;
    color:#FFC100;
    
  }
`
const Button = styled.button`
  padding: 10px 20px;
   background-color: #007bff;
  // background-color:#FFC100;
  color: white;
  font-weight:semibold;
  font-family:Poppins;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;


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

          <Link to='/update-song/:id'>
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
