import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  decrementFavoriteCount,
  incrementFavoriteCount,
  removeFromFavorite,
} from "../redux/feature/favoriteSlice";
import FavBtn from "../styles/AddToFavoriite.styled";

const FavoriteButton = ({ song }) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      dispatch(addToFavorite(song));
      dispatch(incrementFavoriteCount());
    } else {
      dispatch(removeFromFavorite(song.id));
      dispatch(decrementFavoriteCount());
    }
  };

  return (
    <div>
      {
        
        favorite ? <FavBtn
        onClick={toggleFavorite}
        size={30} 
        style={{
          backgroundColor:'red',
          color:'white',
        }}
        >
        Remove Favorite
      </FavBtn> :
      <FavBtn
      onClick={toggleFavorite}
      size={30} 
      
      >
      Add To Favorite
    </FavBtn>
      }
    </div>
  );
};

export default FavoriteButton;
