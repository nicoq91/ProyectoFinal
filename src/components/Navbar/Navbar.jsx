import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


function BasicExample() {
    return (
        <>
            <Navbar color='#465881' bg="primary" variant="dark" expand="lg" className='ContenedorNavbar'>
                <Container>
                    <Navbar.Brand as={Link} to='/'> maquinas opticas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Nosotros</Nav.Link>
                            <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                            <Nav.Link as={Link} to='/Contactos' >Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default BasicExample;