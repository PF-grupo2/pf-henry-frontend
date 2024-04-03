import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter}  from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'font-awesome/css/font-awesome.min.css';
import {store } from '../Redux/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)