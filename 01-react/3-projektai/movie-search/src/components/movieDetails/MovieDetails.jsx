import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import { API_KEY, API_URL } from '../../utils/constants';



const MovieDetails = ({id, handleClose, isLoading}) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const url = `${API_URL}/?${API_KEY}&i=${id}`;
        isLoading(true);
        setTimeout( () => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                console.log(data);
            })
            .finally(() => isLoading(false));
        }, 1000);     
    }, [id])

    return (
        <>
            {movie && (
                <Modal show={movie} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title> {movie.Title} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        info about movieeeeeee
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>  close </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    )
};

export default MovieDetails;