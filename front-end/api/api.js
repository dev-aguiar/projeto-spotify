import axios from "axios";

//const { NODE_ENV } = process.env;
//const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";
const URL = "https://projeto-spotify-rre7.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);

const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

console.log(responseArtists.data);
