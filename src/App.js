
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  
  return (  
    <div>

    <nav>
      <Navbar />
      
    </nav>
    
    <main>
      <center>
        <img src="google logo1.png" width="20%" height="5%" id="googleimg"/>
        
      
        <div>
          <div id="maindiv">
            <span><img src="search-bar.png"/></span>
            <span id="inputspan"><input type="text" name="search"/></span>
            <span><img src="mic.png"/></span>
          </div>
        </div>
        <div>
          <div id="maindiv">
          </div>
        </div>
        
        <section>
          <div><button type="submit">Google Search</button></div>
          <div><button type="submit">I'm feeling lucky</button></div>
        </section>
        <div><a href="">Work, learn and run your bussiness from home</a></div>
        <div id="Bottomdiv">
          <span>Google offered in:</span>
          <ul>
            <li><a href="">हिन्द</a>ी</li>
            <li><a href="">বাংলা</a></li>
            <li><a href="">తెలుగు</a></li>
            <li><a href="">मराठी</a></li>
            <li><a href="">தமிழ்</a></li>
            <li><a href="">ગુજરાતી</a></li>
            <li><a href="">ಕನ್ನಡ</a></li>
            <li><a href="">മലയാളം</a></li>
            <li><a href="">ਪੰਜਾਬੀ</a></li>
          </ul>
        </div>
      </center>
    </main>
  </div>
  );
}

export default App;
