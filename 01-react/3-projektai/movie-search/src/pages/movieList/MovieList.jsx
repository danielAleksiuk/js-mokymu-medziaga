import Container from 'react-bootstrap/Container';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MovieDetails from '../../components/movieDetails/MovieDetails';
import { API_KEY, API_URL } from '../../utils/constants';

const MovieList = () => {
    const [searchValue, setSearchValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDetailsLoading, setIsDetailsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    const onChangeMethod  = (event) => {
        setSearchValue(event.target.value);
    }

    const onKeyUpMethod = (event) => {
        if (event.code === 'Enter') {
            setIsLoading(true);

            const url = `${API_URL}/?${API_KEY}&s=${searchValue}`;

            fetch(url)
                .then(reponse => reponse.json())
                .then(data => setMovies(data.Search))
                .finally(() => setIsLoading(false));
        }
    }

    const handleShowDetails = (movieId) => {
        setSelectedId(movieId);
        setShowDetails(true);
    }

    const handleCloseDetails = () => {
        setSelectedId(null);
        setShowDetails(false);
    }

    return (
        <Container>
            <Header text="Movie search:"/>
            <SearchBar 
                onKeyUpMethod= {onKeyUpMethod}
                onChangeMethod = {onChangeMethod}
            />
            { isLoading && (
                <Row>

                    <Spinner animation="grow"/>
                    <span>Movie list is loading....</span>

                </Row>
            )}

            { showDetails && ( 
                <MovieDetails 
                    id={selectedId} 
                    isLoading={setIsDetailsLoading} 
                    handleClose={handleCloseDetails}/>
            )}

            { movies && !isLoading && (
                <Row>
                    {movies.map((movie) => (
                        <Col md={4} key={movie.imdbID}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={movie.Poster}/>
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text> type: {movie.Type} /  year: {movie.Year}</Card.Text>

                                    {isDetailsLoading && selectedId === movie.imdbID && (
                                        <>
                                            <Spinner/>
                                            <p>Movie data is loading....</p>
                                        </>
                                    )}
                                </Card.Body>
                                <Card.Footer>
                                    <Button 
                                        disabled={isDetailsLoading}
                                        variant="primary"
                                        onClick={() => handleShowDetails(movie.imdbID)}>Open movie details</Button>
                                </Card.Footer>
                            </Card>
                           
                        </Col>
                    )
                )}
                </Row>
            )}
        </Container>
    )
}

export default MovieList;

