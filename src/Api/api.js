import axios from "axios";

const API_ENDPOINT = "https://api.spotify.com/v1/search";

export const fetchMovies = async (songName)=>{
    return axios.get(`${API_ENDPOINT}?q=${songName}&type=album`)
}


import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'a90ce2945dmsh278d364139232a8p19fca3jsn64d8123c72e2',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}