import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const resArtists = await axios.get(`${URL}/artists`);
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;
