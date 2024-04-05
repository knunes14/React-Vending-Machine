import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/candy" element={<Candy/>} />
          <Route path="/soda" element={<Soda/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
