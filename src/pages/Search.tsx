import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { songs } from '../data/mockData';
import { usePlayerStore } from '../store/playerStore';

export function Search() {
  const [query, setQuery] = useState('');
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for songs or artists"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="space-y-2">
        {filteredSongs.map((song) => (
          <button
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className="w-full flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-md"
          >
            <img src={song.coverUrl} alt={song.title} className="w-12 h-12 rounded" />
            <div className="flex-1 text-left">
              <h3 className="font-medium text-white">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}