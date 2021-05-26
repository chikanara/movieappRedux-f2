import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../js/action/movieAction";

const EditMovie = ({movie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(movie.title);
  const [rate, setRate] = useState(movie.rate);
  const [description, setDescription] = useState(movie.description);
  const [url, setUrl] = useState(movie.posterUrl);
  const dispatch = useDispatch()
  const edit = (e) => {
    e.preventDefault();
    dispatch(editMovie({id:movie.id,title,rate,description,posterUrl:url}))
    handleClose()

  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={edit}>
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
             <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Changes
          </Button>
        </Modal.Footer>
          </form>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default EditMovie;
