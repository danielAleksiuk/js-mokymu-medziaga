import { Container } from "react-bootstrap";

const Footer = ({title}) => {
    return (
        <footer>
            <Container>
                <h3>{title}</h3>
            </Container>
        </footer>
    )
};

export default Footer;