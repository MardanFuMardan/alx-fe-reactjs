import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <div>
      <header>
      <Navbar />
      </header>
          <main style={{color: "orange"}}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </main>
          </div>
    </BrowserRouter>
  );
}

export default App;