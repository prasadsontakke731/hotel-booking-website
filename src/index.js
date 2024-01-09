import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <BrowserRouter>

  //   <App />
  // </BrowserRouter>
  <Auth0Provider
    domain="dev-a1i12zzyvwohrtsc.us.auth0.com"
    clientId="RDm3vbSqq9EVKtrzjU6Jx3BfKizP1ohc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>

      <App />
    </BrowserRouter>

  </Auth0Provider>

);


