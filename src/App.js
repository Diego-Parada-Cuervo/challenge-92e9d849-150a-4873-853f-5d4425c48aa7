import React from 'react';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <h1>E-commerce App</h1>
      <UserDetails />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;