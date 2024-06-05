import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contacts from './Contact_page';

const App = () => {
  return (
    <div>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contacts />} />

      </Routes>
    </div>
  );
}

export default App;
