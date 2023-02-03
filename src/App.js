import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Components/Categories';
import Books from './Components/Books';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
