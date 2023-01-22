import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Layout from './Layout';
import Master from './master';
import axios from 'axios';
const App = () =>{

    return(
      <BrowserRouter>
      <Routes>
          <Route index element={<Master />} />
      </Routes>
    </BrowserRouter>
);
}
export default App;
