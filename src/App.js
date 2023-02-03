import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Layout from "./Layout";
import Master from "./OpenMaster/master";
import Sheets from "./sheets";
import Clients from "./clients";
import axios from "axios";
import Epanel from "./epanel";
import { useSelector, useDispatch } from "react-redux";
import { ReadOrder } from "./action/index";
import "./styles.css";

const App = () => {
  const Orderdata = useSelector((state) => state.OrderData);
  console.log(Orderdata);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
        <Route path="/epanel" element={<Epanel />} />
        <Route path="/master" element={<Master />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
