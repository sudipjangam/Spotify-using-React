import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, PlusSquare } from 'lucide-react';
import { playlists } from '../data/mockData';
import { Logo } from './Logo';

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-full p-6">
      <Logo />
      <div className="space-y-4">
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-green-500">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/search" className="flex items-center space-x-2 text-white hover:text-green-500">
          <Search size={24} />
          <span>Search</span>
        </Link>
        <Link to="/library" className="flex items-center space-x-2 text-white hover:text-green-500">
          <Library size={24} />
          <span>Your Library</span>
        </Link>
        
        <div className="pt-4">
          <button className="flex items-center space-x-2 text-white hover:text-green-500">
            <PlusSquare size={24} />
            <span>Create Playlist</span>
          </button>
        </div>
        
        <div className="pt-4">
          <h2 className="text-white font-bold mb-4">Your Playlists</h2>
          <div className="space-y-2">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="block text-gray-400 hover:text-white"
              >
                {playlist.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}