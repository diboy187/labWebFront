import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


import CompShowBlogs from './blog/ShowBlogs.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';


//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>}/>
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={<CompEditBlog/>}/>
        </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
