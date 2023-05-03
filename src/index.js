import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Blog from './components/Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
     <Routes>
     <Route path='/' Component={App}/>
     <Route path='/blog' Component={Blog}/>
     
     </Routes>
    

    </BrowserRouter>
);

