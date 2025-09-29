import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.jpg";
import PredictionForm from "./PredictionForm";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

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
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button
            className="prediction-button prediction-button-navbar"
            onClick={handleOpen}
          >
            Get your prediction here
          </Button>
        </Navbar.Collapse>
        <PredictionForm show={showModal} onHide={handleClose} />
      </Container>
    </Navbar>
  );
}
