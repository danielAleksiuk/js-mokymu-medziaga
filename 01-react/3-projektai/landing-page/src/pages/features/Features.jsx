import * as icons from "react-icons/hi";
import { Container, Row, Col } from 'react-bootstrap';
import './Features.scss';



const Features = (props) => {
    return (
        <div id="features" className="feature">
            <Container>
                <h1 className='feature__title'>{props.title}</h1>
                <Row>
                
                     {
                        props.featuresItems.map((item, key) => (
                            <Col key={key}>
                                <span className='feature__icon'>
                                    {
                                        icons[item.icon]()
                                    }
                                    
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Col>
                        ))
                    } 
                </Row>
            </Container>
        </div>
    )
}

export default Features;

//   "title": "features",
        // "featuresItems": [
        //     {
        //         "icon": "HiChatAlt2v",
        //         "title": "lorem ipsum",
        //         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus molestiae ducimus voluptatibus ut illo sequi ratione!"
        //     },