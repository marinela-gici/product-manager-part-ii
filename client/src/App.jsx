import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from "./Components/Detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/products" default />
          <Route element={<Detail />} path="/products/:id" /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
