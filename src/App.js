import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Layout from "./Layout";
import Master from "./master";
import Sheets from "./sheets";
import Clients from "./clients";
import axios from "axios";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
        <Route path="/master" element={<Master />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
