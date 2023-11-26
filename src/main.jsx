import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
import LoadingPage from './components/LoadingPage.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    // errorElement: <h1>Sorry Bro!</h1>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/books',
        element: <Books/>,
        loader:()=> fetch('https://api.itbook.store/1.0/new'),
        errorElement: <ErrorPage/>
      },
      {
        path: '/books/:id',
        element: <BookDetails/>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        errorElement: <ErrorPage/>

      },
      // {
      //   path: 'loader',
      //   element: <LoadingPage></LoadingPage>
      // },
      {
        path: '*',
        element: <ErrorPage/>
      }
      // {
      //   path: 'err',
      //   element: <ErrorPage/>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
