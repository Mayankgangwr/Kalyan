import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Layout from "./Layout";
import Master from "./master";
import CloseMaster from "./closemaster";
import OpenMaster from "./openmaster";
import Sheets from "./sheets";
import Clients from "./clients";
import axios from "axios";
import OpenEpanel from "./epanelopen";
import CloseEpanel from "./epanelclose";
import CEpanel from "./cep";
import { useSelector, useDispatch } from "react-redux";
import { ReadOrder } from "./action/index";
import Login from "./login";
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
        <Route path="/login" element={<Login />} />
        <Route path="/master/:sheetid" element={<Master />} />
        <Route path="/openepanel/:sheetid" element={<OpenEpanel />} />
        <Route path="/closeepanel/:sheetid" element={<CEpanel />} />
        <Route path="/closemaster/:sheetid" element={<CloseMaster />} />
        <Route path="/openmaster/:sheetid" element={<OpenMaster />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
