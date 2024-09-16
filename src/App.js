import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const contactRef = useRef(null); // Create a ref for the contact section

  return (
    <div className="App">
      <NavBar contactRef={contactRef} /> {/* Pass the ref to NavBar */}
      <Banner />
      <Skills />
      <Projects />
      <Contact contactRef={contactRef} /> {/* Pass the ref to Contact */}
      <Footer />
    </div>
  );
}

export default App;
