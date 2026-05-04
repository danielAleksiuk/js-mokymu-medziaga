import { Container, Row, Col } from 'react-bootstrap';
const Contacts = (props) => {
    return (
        <div id="contacts">
            <Container>
                <h1>{props.title}</h1>
                <Row>
                    <Col md={8}>
                        <p>{props.description}</p>
                    </Col>
                    <Col md={4}>
                        <h3>{props.contactInfo.title}</h3>
                        <p>{props.contactInfo.address}</p>
                        <p>{props.contactInfo.phone}</p>
                        <p>{props.contactInfo.email}</p>
                    </Col>
                </Row>
                <Row>
                    {
                        props.socialIcons.map((item, key) => (
                            <Col key={key}>{item.icon}</Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;