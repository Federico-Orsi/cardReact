import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Context from './components/Context';

function App() {
  return (
    <>
    
    <Context>
    <BrowserRouter>
    
    
    <Routes>
       
      <Route path='/' element={<Home/>}/>
      
    </Routes>
    
    
    </BrowserRouter>
    </Context>
         
    
    </>
  );
}

export default App;
