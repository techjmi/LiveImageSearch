// import React from 'react';
// import ReactDOM from 'react-dom';
// import About from './About';
// import Header from './component/Header/Header';
// import Contact from './Contact';
// import General from './General';
// import Layout from './Layout';
// // import App from './App';
// import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Header />,
//   },
//   {
//     path: 'about',
//     element: <About />,
//   },
//   {
//     path: 'contact',
//     element: <Contact />,
//   },
//   {
//     path: 'general',
//     element: <General />,
//   },
//   {
//     path: 'menu',
//     element: <Layout />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
   
  
//      <RouterProvider router={router} />
   
     
   
//   </React.StrictMode>
// );

// index.js

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import Header from './component/Header/Header';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
   
    <App />
  </React.StrictMode>
);
