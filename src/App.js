import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';

import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
