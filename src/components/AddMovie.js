import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMovie } from '../js/action/movieAction';

const AddMovie = () => {
    const [title, setTitle] = useState("");
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && rate && description && url){
            dispatch(addMovie({id:Math.random(),rate,description,title,posterUrl:url}))

        }
        else alert("you should complete all fields")
    }
    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
            Title:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            URL:
            <input
              type="url"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Button variant="primary" type="submit" >
                Submit
            </Button>
            
     
          </form>
      
        </div>
    )
}

export default AddMovie
