import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Planes.css';
import './Plane.css';
import './Layout.css';
import Planes from './Planes';
import Layout from './Layout';
import Plane from './Plane';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>    
    <Route path="/" element={<Layout/>}/>
    <Route path="/Planes" element={<Planes></Planes>}/>  
    <Route path="/Planes/:id" element={<Plane/>}/>  
  
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
                         
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(
  
);
