import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import { BrowserRouter,Routes,Route, redirect } from 'react-router-dom';
import Main from './Main';
import Blog from './Blog';



function UserProfile() {
    const {user, isAuthenticated,isLoading} = useAuth0();


    if(isLoading){
      <div>Loading...</div>
    }
    return(
        isAuthenticated &&(
        <BrowserRouter>
          <Routes>
           <Route path='/' Component={Main}/>
           <Route path='/blog' Component={Blog}/>
          </Routes>
        </BrowserRouter>
        )
     )
}

export default UserProfile


