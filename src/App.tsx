import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Playlist } from './pages/Playlist';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Routes>
        </main>
        <Player />
      </div>
    </Router>
  );
}

export default App;