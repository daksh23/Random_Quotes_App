import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/header'
import Main from './Components/Main/main'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main/>
  </BrowserRouter>
  );
}

export default App;
