import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route exact path="/*" element={ <Auth /> } />
        <Route exact path="/im/*" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;