import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-3">
      <Container className="text-center text-muted">
        © {new Date().getFullYear()} ECG Heart Failure Prediction
      </Container>
    </footer>
  );
}