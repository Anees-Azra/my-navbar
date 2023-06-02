import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import Main from './components/Main';
import Blog from './components/Blog';
import {Auth0Provider} from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
/*import LoginButton from './components/LoginButton';
import {Auth0Provider} from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Auth0Provider
   domain='dev-ihy5ifk22vbaxinf.us.auth0.com'
   clientId='WJZoHu9fD6pG6EusYE2IYs8lP73ueVK5'
   authorizationParams={{
      redirect_uri: 'http://localhost:3000'
    }}>
 <App />
 

</Auth0Provider>


  
);




