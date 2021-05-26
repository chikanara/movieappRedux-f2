import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMovie } from '../js/action/movieAction'
import EditMovie from './EditMovie'

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()
    return (
        <Card style={{ width: '20rem',marginBottom:"15px" }}>
  <Card.Img variant="top" src={movie.posterUrl} style={{height:"70%"}} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.rate}
    </Card.Text>
    <Button variant="danger" onClick={() => dispatch(deleteMovie(movie.id))}>Delete</Button>
    <Link to={`/${movie.id}`}>SEE Details</Link>
    <EditMovie movie={movie}/>

  </Card.Body>
</Card>
    )
}

export default MovieCard
