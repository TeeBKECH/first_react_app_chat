import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Auth, Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={ <Auth /> } >
          <Route exact path="login" element={ <Auth /> } />
        </Route>
        <Route exact path="/register" element={ <Home /> } />
      </Routes>
      
    </div>
  );
}

export default App;