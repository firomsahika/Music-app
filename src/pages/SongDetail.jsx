import React,{useEffect} from 'react'
import Content from '../styles/Home/HomeContainer.styled'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchDataRequest } from '../redux/songSaga'
import { fetchDetailSong } from '../redux/SongDetailSaga'
import { songDetailRequest } from '../redux/feature/songDetailSlice'



const DetailWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  color:white;
  background-color: #212121;
  div{
    background:red;
  }
`

const SongDetail = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const song = useSelector((state)=> state.songDetail.song);
  
  useEffect(()=>{
    dispatch(fetchDetailSong(id))
  },[dispatch,id]);

  console.log(song);

  return (
    <Content>
       <DetailWrapper>
        {
         song.title
        }
       </DetailWrapper>
    </Content>
  )
}

export default SongDetail
