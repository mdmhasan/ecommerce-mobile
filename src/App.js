import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart'
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal/>
    </>
  );
}

export default App;
