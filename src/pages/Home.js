import { Container } from "react-bootstrap";
import OurWork from "../components/OurWork";
import ModelArchitecture from "../components/ModelArchitecture";
import SignalsComparison from "../components/SignalsComparison";

export default function Home() {
  return (
    <Container>
      <OurWork />
      <ModelArchitecture />
      <SignalsComparison />
    </Container>
  );
}
