import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.scss';

const Gallery = ({title, description, images}) => {
    return (
        <div className="gallery" id="galleryNac">
            <Container>
                <h1>{title}</h1>
                <p>{description}</p>
                <Row>
                    {
                        images.map((item, key) => (
                            <Col md={4} key={key}>
                                <img src={item.url}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Gallery;