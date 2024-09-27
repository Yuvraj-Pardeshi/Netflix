import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import Header from './components/Header';
import Browse from './components/Browse';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/login',
    element : <Login />
  },
  {
    path : '/Browse',
    element : <Browse />
  }
]) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);


