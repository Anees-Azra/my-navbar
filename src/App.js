
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Blog from './Pages/Blog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        
    </div>
     <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/blog' Component={Blog}/>
     </Routes>
    

    </BrowserRouter>
    
  );
}

export default App;
