import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../../assets/about.jpg';
import { HiCheck } from "react-icons/hi";
import "./About.scss";

const About = ({title, description, whyUsTitle, whyUsItems}) => {
    return (
        <div id="about-us" className="about">
            <Container>
                <Row>
                    <Col>
                        <img src={aboutImg}/>
                    </Col>
                    <Col>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <h3>{whyUsTitle}</h3>
                        <div style={{display: 'flex', flexWrap:'wrap'}}>
                            {
                                whyUsItems.map((item, key) => (
                                    <Col sm={6} key={key}>
                                        <HiCheck/> {item}
                                    </Col>
                                ))
                            }
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default About;