import { Container } from "react-bootstrap";
import OurWork from "../components/OurWork";
import ModelArchitecture from "../components/ModelArchitecture";
import SignalsComparison from "../components/SignalsComparison";
import { useEffect } from "react";
import OurResults from "../components/OurResults";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <OurWork />
      <ModelArchitecture />
      <SignalsComparison />
      <OurResults />
    </Container>
  );
}
