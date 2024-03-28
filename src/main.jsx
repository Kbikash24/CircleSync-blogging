import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Index.jsx'
import { app } from './Firebase/FirebaseConfig.js'
import { ToastContainer } from 'react-toastify'
import 'react-quill/dist/quill.snow.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   <ToastContainer/>
  </React.StrictMode>,
)
