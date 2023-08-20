import React from 'react';
import './assets/style/App.css';
import tower from './assets/images/tower.JPEG';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './webpages/About';
import Portfolio from './webpages/Portfolio';
import Resume from './webpages/Resume';
import Contact from './webpages/Contact';

// Creates the initial application and routing to associated pages within the URL
function App() {

  const background = {
    backgroundImage: `url(${tower})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="Homepage" style={background}>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          {/* About/About Me is registered as the default page on load */}
          <Route path="/" index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
