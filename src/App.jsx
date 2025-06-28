import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
<<<<<<< HEAD
<<<<<<< HEAD
import NotFound from './pages/NotFound';
=======
import Banner from './component/banner';
>>>>>>> 26b716f3bf3a1166a6b9f65c0cbb954b6c467ff2
=======
import PopularPost from './component/popularPost/PopularPost';
import TrendyPost from './component/TrendyPost/TrendyPost';
import ComponentTeam from './component/ComponentTeam/ComponentTeam';
>>>>>>> 1be438eb555df4b204b083425118432ebb012225

function App() {
  return (
    <Router>
      {/* <Layout> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
=======
        </Routes> */}
          <PopularPost />
          <TrendyPost />
          <ComponentTeam />
      {/* </Layout> */}
>>>>>>> 1be438eb555df4b204b083425118432ebb012225
    </Router>
  );
}

export default App;
