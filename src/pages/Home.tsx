import React from 'react';
import { playlists } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface PlaylistSectionProps {
  title: string;
  playlists: typeof playlists;
}

function PlaylistSection({ title, playlists }: PlaylistSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-white">See all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {playlists.map((playlist) => (
          <Link
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            className="group bg-gray-900/40 p-4 rounded-lg hover:bg-gray-800/40 transition duration-300"
          >
            <div className="relative">
              <img
                src={playlist.coverUrl}
                alt={playlist.name}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <button className="absolute bottom-2 right-2 p-3 bg-green-500 rounded-full shadow-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Play fill="white" className="text-white" size={20} />
              </button>
            </div>
            <h3 className="font-semibold text-white truncate">{playlist.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{playlist.songs.length} songs</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Home() {
  const recentPlaylists = playlists.slice(0, 4);
  const popularPlaylists = [...playlists].sort(() => Math.random() - 0.5).slice(0, 4);
  const moodPlaylists = playlists.slice(2, 6);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Good evening</h1>
        <p className="text-gray-400">Welcome back to your music</p>
      </div>

      <PlaylistSection title="Recently Played" playlists={recentPlaylists} />
      <PlaylistSection title="Popular Playlists" playlists={popularPlaylists} />
      <PlaylistSection title="Made For Your Mood" playlists={moodPlaylists} />
    </div>
  );
}