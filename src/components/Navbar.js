import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.jpg";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="navbar-container">
        <Navbar.Brand>
          <Image src={logo} className="navbar-logo"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link>Our Work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/prediction">
              <Nav.Link>Prediction</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button className="prediction-button prediction-button-navbar">
            Get your prediction here
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
