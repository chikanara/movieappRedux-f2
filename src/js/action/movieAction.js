import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../types";

export const addMovie = (payload) => ({
    type: ADD_MOVIE,
    payload //object={id,title,rate,description,posterUrl,trailer}
})

export const deleteMovie = (payload) => ({
    type: DELETE_MOVIE,
    payload //id
})

export const editMovie = (payload) => ({
    type: EDIT_MOVIE,
    payload // object={id,title,rate,description,posterUrl,trailer}
})


