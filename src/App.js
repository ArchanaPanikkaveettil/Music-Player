
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './Pages/Player_trial';
import SongList from './Components/SongList'
import Home from './Pages/Home';
import Playlist from './Pages/Playlist';

function App() {
  return (
    <>
  <BrowserRouter>
  
  <Routes>
    
    <Route path='/' element={<Home/>} />
    <Route path='/playlist/:id' element={<Playlist/>}/>
    <Route path="/player" element={<Player/>} />
    <Route path='/songlist' element={<SongList />} />
    
  </Routes>

  </BrowserRouter>
    </>
  );
}

export default App;
