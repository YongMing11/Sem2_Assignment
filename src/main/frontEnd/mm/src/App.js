import React from 'react';
// import '/css/all.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;
