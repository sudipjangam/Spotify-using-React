import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { usePlayerStore } from '../store/playerStore';
import { cn } from '../lib/utils';

export function Player() {
  const { currentSong, isPlaying, volume, togglePlay, setVolume } = usePlayerStore();

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={currentSong.coverUrl}
            alt={currentSong.title}
            className="w-14 h-14 rounded"
          />
          <div>
            <h4 className="font-medium">{currentSong.title}</h4>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:text-green-500">
            <SkipBack size={24} />
          </button>
          <button
            onClick={togglePlay}
            className={cn(
              "p-2 rounded-full bg-white text-black hover:scale-105 transition",
              isPlaying && "bg-green-500"
            )}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="hover:text-green-500">
            <SkipForward size={24} />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Volume2 size={20} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}