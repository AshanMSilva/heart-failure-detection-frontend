import { Container } from "react-bootstrap";
import OurWork from "../components/OurWork";
import ModelArchitecture from "../components/ModelArchitecture";
import SignalsComparison from "../components/SignalsComparison";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <Container>
      <OurWork />
      <ModelArchitecture />
      <SignalsComparison />
    </Container>
  );
}
