import axios from "axios";
import genreFilms from "./fake_data.json"

const api = axios.create({})

export const getGenreFilms = () => {
    console.log(genreFilms)
    return genreFilms;
}