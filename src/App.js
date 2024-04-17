
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Player from './Pages/Player';
import SongList from './Components/SongList';

function App() {
  return (
    <>
  <BrowserRouter>
  
  <Routes>
    
    <Route path="/playlist" element={<Player/>} />
    <Route path='/songlist' element={<SongList />} />
    
  </Routes>

  </BrowserRouter>
    </>
  );
}

export default App;
