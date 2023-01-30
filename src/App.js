import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Layout from "./Layout";
import Master from "./master";
import axios from "axios";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/master" element={<Master />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
