import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/privacy';
import TermsOfService from './pages/terms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="blog" element={<Blog />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-condition" element={<TermsOfService />} />
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}

export default App;