import axios from "axios";
import { AllMovie, movieURL } from "../type/movieTypes"

export const allMovieAction = () => {
    return async (dispatch) => {
        const res = await axios.get(movieURL);
        dispatch({ type: AllMovie, data: res.data.results, pages: res.data.total_pages })
    }
}

export const searchMovie = (word) => {
    return async (dispatch) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=731ebf8c1fb3bd39252d28c63baf8b33&query=${word}&language=ar`
        );
        dispatch({ type: AllMovie, data: res.data.results, pages: res.data.total_pages })
    }
}

export const getPages = (pageNum) => {
    return async (dispatch) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=731ebf8c1fb3bd39252d28c63baf8b33&language=ar&page=${pageNum}`
        );
        dispatch({ type: AllMovie, data: res.data.results, pages: res.data.total_pages })
    }
}