import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import React from "react";
import Reviews from "./components/Reviews"
import Header from "./components/Header"
import Nav from "./components/Nav";




function App() {
  

  
  return (
    <>
      <Header />
      <Nav />
      <Reviews  />
    </>
  );
}

export default App;
