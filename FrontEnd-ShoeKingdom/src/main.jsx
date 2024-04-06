import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'font-awesome/css/font-awesome.min.css';
import { store } from '../Redux/store.js'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
  </React.StrictMode >,
)