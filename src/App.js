import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/menu';
import Teclas from './components/Teclas/teclas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/teclas" element={<Teclas />} />
    </Routes>
  );
}

export default App;
