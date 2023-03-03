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
import CEpanel from "./cep";
import OEpanel from "./oep";
import CloseEpanel from "./epanelclose";
import OpenEpanel from "./epanelopen";
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
        <Route path="/openepanel/:sheetid" element={<OpenEpanel />} />
        <Route path="/closeepanel/:sheetid" element={<CloseEpanel />} />
        <Route path="/closemaster/:sheetid" element={<CloseMaster />} />
        <Route path="/openmaster/:sheetid" element={<OpenMaster />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
