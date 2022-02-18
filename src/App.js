import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

import { GlobalStyle } from './GlobalStyles';

const App = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle/>
  </Router>
);

export default App;
