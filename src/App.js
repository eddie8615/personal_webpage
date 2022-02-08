import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './Components/Home';
import Header from './Components/Header';

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
);

export default App;
