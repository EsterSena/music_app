import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchContext from './pages/SearchContext';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/search" element={<SearchContext />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
