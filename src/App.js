import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './Pages/Player';

function App() {
  return (
    <>
  <BrowserRouter>
  
  <Routes>
    
    <Route path="/" element={<Player/>} />
    
  </Routes>

  </BrowserRouter>
    </>
  );
}

export default App;
