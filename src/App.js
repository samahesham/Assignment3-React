import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './Assigment3/product';
import Navbar from './Assigment3/navbar'
import ProDetails from './Assigment3/proDetails'
import Favs from "./Assigment3/favs";

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Route path="/products" exact component={Products} />
        <Route path="/productDetails/:id" exact component={ProDetails}/>
        <Route path="/favs" exact component={Favs} />
      </Router>
    
    </>
  );
}

export default App;
