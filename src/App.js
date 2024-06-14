import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/menu';
import Teclas from './components/Teclas/teclas';

function App() {
  return (
    <Router basename="/minigame">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/teclas" element={<Teclas />} />
      </Routes>
    </Router>
  );
}

export default App;
