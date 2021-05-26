import React from 'react'
import { useSelector } from 'react-redux'

const Details = ({match}) => {
    const movies = useSelector(state => state.movieReducer.movies)
    console.log(movies)
    const movie= movies.find(el => el.id.toString() === match.params.id.toString())
    console.log(movie)
    console.log(match)
    return (
        <div>
            <h1>Details</h1>
            <p>{movie.description}</p>
        </div>
    )
}

export default Details
