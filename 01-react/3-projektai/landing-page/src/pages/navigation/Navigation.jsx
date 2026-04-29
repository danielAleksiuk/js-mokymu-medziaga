import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = ({title, navItems}) => {
    return (
        <Navbar bg='light' expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto"
                        navbarScroll
                    >
                        {
                            navItems.map(item => (
                                <Nav.Link
                                    key={item}
                                    href={'#' + item}
                                >
                                    {item}
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Navigation;