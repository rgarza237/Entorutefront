import React from 'react';
import {
    Routes,
    Route,
  } from 'react-router-dom';

import PlayerPage from './pages/playerPage';
import AlbumsPage from './pages/albumsPage'
import SongsPage from './pages/songsPage'

import './css/index.css'
import './css/player.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AlbumsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/album/:idAlbum" element={<SongsPage/>} />
        <Route path="/player/:idSong" element={<PlayerPage />} />
      </Routes>
    </>
  );
}

export default App;
