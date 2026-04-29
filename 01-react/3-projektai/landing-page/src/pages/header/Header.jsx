import { Button, Container, Row } from "react-bootstrap";
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <div className="header--overlay">
                <Container>
                    <Row className="header__details">
                        <h1 className="header__title">{props.title}</h1>
                        <p className="header__subtitle">{props.subtitle}</p>
                        <Button  className="header__button">{props.buttonText}</Button>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header;