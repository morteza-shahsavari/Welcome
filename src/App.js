
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Components/Page/Login';
import Home from './Components/Page/Home';
import Profile from './Components/Page/Profile';
import PrivateRoute from './Components/Page/PrivateRoute';
import NotFound from './Components/Page/NotFound';
import { useState } from 'react';

function App() {
  const [au, setAu] = useState(false)
const func=(data)=>{
  setAu(data)
}
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile auth={au}/>}/>
        <Route path='/Login' element={<Login  f={func}/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
