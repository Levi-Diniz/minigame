import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/menu';
import Jogo from './components/Teclas/teclas';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/menu" element={<Menu />} />
                <Route path="/teclas" element={<Jogo />} />
            </Routes>
        </Router>
    );
}

export default App;
