import React from 'react';
// import '/css/all.css';
import Main from './components/MainComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route to="/" component={Main} />
      {/* <Main /> */}
    </BrowserRouter>
  );
}

export default App;
