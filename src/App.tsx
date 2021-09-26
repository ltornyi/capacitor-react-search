import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNav from './main-nav/MainNav';

function App() {
  return (
    <BrowserRouter>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
