import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contacts from './Contact_page';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contacts />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
