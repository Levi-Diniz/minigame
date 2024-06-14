import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/menu';
import Teclas from './components/Teclas/teclas';

function App() {
  return (
    <Router basename="/seu-repositorio">
      <Routes>
        <Route path="/minigame" element={<Menu />} />
        <Route path="/minigame/teclas" element={<Teclas />} />
      </Routes>
    </Router>
  );
}

export default App;
