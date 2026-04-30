import { Container, Row, Col } from "react-bootstrap";

const Team = (props) => {
    return (
        <div id="teamNav" className="team">
            <Container>
                 <h1>{props.title}</h1>
                 <p>{props.description}</p>

                <Row>
                    {
                        props.members.map((item, key) => (
                            <Col md={3} key={key}>
                                <img src={item.url}/>
                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
} 

export default Team;