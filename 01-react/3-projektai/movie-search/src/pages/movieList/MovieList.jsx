import Container from 'react-bootstrap/Container';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const API_URL = 'https://www.omdbapi.com';
const API_KEY = 'apikey=994672fe';

const MovieList = () => {
    const [searchValue, setSearchValue] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);

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
            // setTimeout(()=> { setIsLoading(false)}, 2000)
        }
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

            { movies && !isLoading && (
                <Row>
                    {movies.map((movie) => (
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant='top' src={movie.Poster}/>
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text> type: {movie.Type} /  year: {movie.Year}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary">Open movie details</Button>
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