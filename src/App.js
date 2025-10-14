import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Prediction from "./pages/Prediction";
import Home from "./pages/Home";
import banner from "./assets/images/banner.jpg";
import About from "./pages/About";

function Layout({ children }) {
  const location = useLocation();

  const heroConfig = {
    "/": {
      title: "ECG Heart Failure Prediction",
      subtitle: "AI-assisted decision support for clinicians",
      image: banner,
    },
    "/prediction": {
      title: "Prediction Results",
      subtitle: "Patient ECG analysis and outcome",
      image: banner,
    },
  };

  const { title, subtitle, image } =
    heroConfig[location.pathname] || heroConfig["/"];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Hero title={title} subtitle={subtitle} image={image} />
      <main className="flex-grow-1 p-4">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/prediction"
          element={
            <Layout>
              <Prediction />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
