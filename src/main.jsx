import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import ListedBook from './components/ListedBook.jsx';
import PageToRead from './components/PageToRead.jsx';
const router = createBrowserRouter([
  { 
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
