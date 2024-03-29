// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pill from './components/Pill';
import PillMessage from './components/PillMessage';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Pill />} />
                <Route path="/PillMessage" element={<PillMessage />} />
            </Routes>
        </Router>
    );
}

export default App;
