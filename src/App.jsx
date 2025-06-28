import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PopularPost from './component/popularPost/PopularPost';
import TrendyPost from './component/TrendyPost/TrendyPost';
import ComponentTeam from './component/ComponentTeam/ComponentTeam';

function App() {
  return (
    <Router>
      {/* <Layout> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
          <PopularPost />
          <TrendyPost />
          <ComponentTeam />
      {/* </Layout> */}
    </Router>
  );
}

export default App;
