import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { getAllCountries, getCountry } from './clientAPI';
//pages
import Layout from "./Pages/Layout";
import Home from './Pages/Home';
import Details from './Pages/Details';
import ErrorPage from './Pages/ErrorPage';
	
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index 
             element={<Home />} 
             loader={getAllCountries}
      />
      <Route path='/countries'
             element={<Home/>} 
             loader={getAllCountries}
      />
      <Route path="countries/:name" 
             errorElement={<ErrorPage />}
             element={<Details />} 
             loader={getCountry}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
