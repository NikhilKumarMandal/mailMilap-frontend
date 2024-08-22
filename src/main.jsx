import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route, } from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Todo from './pages/Todo.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AuthLayout/>}>
      <Route path='/' element={ <Home/>} />
      <Route path='/about' element={ <About/>} />
      <Route path='/blog' element={ <Blog/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/todo/:id" element={<Todo/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
  
)
