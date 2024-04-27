import React, { useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToFavorite, decrementFavoriteCount, incrementFavoriteCount, removeFromFavorite } from '../redux/feature/favoriteSlice';

const FavoriteButton = ({ song }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      dispatch(addToFavorite(song));
      dispatch(incrementFavoriteCount())
    } else {
      dispatch(removeFromFavorite(song.id));
      dispatch(decrementFavoriteCount())
    }
  };

  return (
    <div>
        <MdFavorite
      onClick={toggleFavorite}
      size={30}
      
      style={{
        color: favorite ? '#ffa200' : 'gray',
        cursor: 'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    />
    </div>
  );
};

export default FavoriteButton;
