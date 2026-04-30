import { Container, Row, Col } from "react-bootstrap";

const Feedback = (props) => {
    return (
        <div id="feedbackNav" className="feedback">
            <Container>
                 <h1>{props.title}</h1>

                <Row>
                    {
                        props.feedbacks.map((item, key) => (
                            <Col md={4} key={key}>
                                <Row>
                                    <Col md={4}>
                                        <img src={item.url}/>
                                    </Col>
                                    <Col md={8}>
                                        <p>{item.text}</p>
                                        <h4>{item.client}</h4>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
} 

export default Feedback;