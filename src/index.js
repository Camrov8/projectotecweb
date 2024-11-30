import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Planes from './Planes';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* Página inicial ("/") com App e um link para /planes */}
      <Route
        path="/"
        element={
          <>
           
            <Link to="/planes"> Planes</Link>
            <App />
          </>
        }
      />
      <Route path="/planes" element={<Planes />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
