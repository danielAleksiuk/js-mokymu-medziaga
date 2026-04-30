import { Container, Row, Col } from "react-bootstrap";
import * as icons from "react-icons/hi";

const Services = (props) => {
    return (
        <section id="ourServices" className="services">
            <Container>
                <Row>
                    <h1>{props.title}</h1>
                </Row>
                <Row>
                    <p>{props.description}</p>
                </Row>
                <Row>
                     {
                        props.serviceItems.map((item, key) => (
                            <Col key={key}>
                                <span>
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

        </section>
    )
}

export default Services;