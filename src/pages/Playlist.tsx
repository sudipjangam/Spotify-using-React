import React from 'react';
import { useParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { playlists } from '../data/mockData';
import { usePlayerStore } from '../store/playerStore';

export function Playlist() {
  const { id } = useParams();
  const setCurrentSong = usePlayerStore((state) => state.setCurrentSong);
  
  const playlist = playlists.find((p) => p.id === id);
  
  if (!playlist) {
    return <div className="p-6">Playlist not found</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-end space-x-6 mb-6">
        <img
          src={playlist.coverUrl}
          alt={playlist.name}
          className="w-60 h-60 shadow-lg"
        />
        <div>
          <p className="text-sm font-medium text-gray-400">PLAYLIST</p>
          <h1 className="text-4xl font-bold mt-2 mb-4">{playlist.name}</h1>
          <p className="text-gray-400">{playlist.songs.length} songs</p>
        </div>
      </div>

      <div className="mt-6">
        {playlist.songs.map((song, index) => (
          <button
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className="w-full flex items-center space-x-4 p-2 hover:bg-gray-800 rounded-md group"
          >
            <span className="w-6 text-gray-400 group-hover:hidden">{index + 1}</span>
            <Play className="w-6 h-6 hidden group-hover:block text-white" />
            <img src={song.coverUrl} alt={song.title} className="w-12 h-12 rounded" />
            <div className="flex-1 text-left">
              <h3 className="font-medium text-white">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <span className="text-gray-400">{Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}</span>
          </button>
        ))}
      </div>
    </div>
  );
}