import { Playlist, Song } from '../types/music';

export const songs: Song[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 354,
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb',
    audioUrl: 'https://example.com/bohemian-rhapsody.mp3'
  },
  {
    id: '2',
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    duration: 183,
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    audioUrl: 'https://example.com/imagine.mp3'
  },
  {
    id: '3',
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: 391,
    coverUrl: 'https://images.unsplash.com/photo-1520446266423-6daca23fe8c7',
    audioUrl: 'https://example.com/hotel-california.mp3'
  },
  {
    id: '4',
    title: 'Sweet Child O\' Mine',
    artist: 'Guns N\' Roses',
    album: 'Appetite for Destruction',
    duration: 356,
    coverUrl: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73',
    audioUrl: 'https://example.com/sweet-child.mp3'
  },
  {
    id: '5',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: 294,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
    audioUrl: 'https://example.com/billie-jean.mp3'
  },
  {
    id: '6',
    title: 'Yesterday',
    artist: 'The Beatles',
    album: 'Help!',
    duration: 125,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
    audioUrl: 'https://example.com/yesterday.mp3'
  }
];

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'My Favorites',
    coverUrl: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa',
    songs: songs.slice(0, 4)
  },
  {
    id: '2',
    name: 'Rock Classics',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    songs: songs.slice(0, 3)
  },
  {
    id: '3',
    name: 'Chill Vibes',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
    songs: [songs[1], songs[5]]
  },
  {
    id: '4',
    name: 'Greatest Hits',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    songs: songs
  },
  {
    id: '5',
    name: 'Road Trip Mix',
    coverUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    songs: songs.slice(2, 5)
  },
  {
    id: '6',
    name: 'Evening Acoustic',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    songs: [songs[1], songs[5]]
  }
];