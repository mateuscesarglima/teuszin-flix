import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./components/layouts/Container";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import Contact from "./components/pages/Contact";
import Films from "./components/pages/Films";
import Home from "./components/pages/Home";
import NewFilm from "./components/pages/NewFilm";
import User from "./components/pages/User";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/films" element={<Films />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/newFilm" element={<NewFilm />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
