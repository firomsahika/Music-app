import React, {  useEffect, useState } from 'react'

import styled from 'styled-components'
import { MdFavorite } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import Content from '../styles/Home/HomeContainer.styled';
import { useDispatch, useSelector } from 'react-redux';
import { incrementFavoriteCount , decrementFavoriteCount} from '../redux/feature/favoriteSlice';
import FavBtn from '../styles/AddToFavoriite.styled';
import { addToFavorite } from '../redux/feature/favoriteSlice';
import FavoriteButton from './FavoriteButton';


const SongList = styled.div`
display: grid;
background-color: #212121;
grid-template-columns: repeat(5, 1fr); /* Three columns with equal width */
//grid-gap: 10px;
// color:#FFC100;
color: #bababa;
border-radius:40px;
padding:5px;
align-items:center;
justify-content:center;
img{
  object-fit:cover;
  width:192px;
  height:150px;
  border-radius:8px;
  padding-bottom:10px
}
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit the color from the parent */
`;


const Song = ({ songData }) => {
    const dispatch = useDispatch();
    const id = songData.id;
    const [favorite, setFavorite] = useState(false);
   
 
    return (
    <div >
     <SongList>
        <div style={{backgroundColor:'#000000',paddingLeft:'5px',display:'flex',flexDirection:'column',fontSize:'13px',borderRadius:'10px'}}>
                <StyledNavLink to={`/song/:${songData.id}`}>
                <img src={songData.imageUrl} alt="photos" />
                </StyledNavLink>
                <p 
                style={{padding:'0px',color:'#ffa200'}}
                >{songData.nameofSinger}</p>
                <p
                style={{padding:'0px'}}
                >Title: {songData.title}</p>
                <p>
                Released: {songData.produceddate}{' '}
                <FavoriteButton song={songData}  />
              
                </p>
        </div>
      </SongList>
      </div>
    );
  };

  export default Song;
  