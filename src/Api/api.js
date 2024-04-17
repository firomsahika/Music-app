import axios from "axios";

const API_ENDPOINT = "https://api.spotify.com/v1/search";

export const fetchMovies = async (songName)=>{
    return axios.get(`${API_ENDPOINT}?q=${songName}&type=album`)
}