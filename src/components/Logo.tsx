import React from 'react';
import { Music2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2 mb-8">
      <div className="bg-white rounded-full p-2">
        <Music2 size={24} className="text-black" />
      </div>
      <span className="text-2xl font-bold text-white">Spotify</span>
    </div>
  );
}