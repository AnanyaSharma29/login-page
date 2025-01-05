import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { useLocation } from 'react-router-dom';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showPlayer, setShowPlayer] = useState(true);
  const tracks = [
    { name: 'Motivational', src: '/aspire-motivation-274371.mp3' },
    { name: 'Calm', src: '/inspirational-calm-emotional-272593.mp3' },
    { name: 'Happy', src: '/good-morning-upbeat-happy-ukulele-244395.mp3' }
  ];

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error('Error trying to play audio:', err);
      });
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = tracks[index].src;
      audioRef.current.load();

      // Wait for the new track to be loaded before playing
      audioRef.current.onloadeddata = () => {
        audioRef.current?.play();
      };
    }
  };

  // Auto-play music when the component is mounted
  useEffect(() => {
    if (audioRef.current) {
      // Ensure the track starts automatically
      audioRef.current.play().catch((err) => {
        console.error('Error trying to auto-play audio:', err);
      });
    }
  }, [currentTrack]);

  const location = useLocation();
  const hiddenPaths = [
    '/login',
    '/signup',
    '/consultant-login',
    '/consultant-signup',
    '/user-consultant',
    '/consultant-dashboard',
    '/request',
    '/settings',
    '/clients'
  ];

  if (hiddenPaths.includes(location.pathname)) {
    return null; // Don't render MusicPlayer for hidden pages
  }

  if (!showPlayer) {
    return null; // Close the player
  }

  return (
    <Draggable>
      <div className="fixed bg-gray-100 p-4 w-80 rounded-xl shadow-lg">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-red-600"
          onClick={() => setShowPlayer(false)}
        >
          &times;
        </button>

        <h3 className="text-lg font-semibold mb-4 text-center">Relax with Music</h3>

        <audio ref={audioRef} src={tracks[currentTrack].src} />

        <div className="mb-4 flex space-x-2 justify-center">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => changeTrack(index)}
              className={`px-3 py-2 rounded-lg text-white ${currentTrack === index ? 'bg-blue-500' : 'bg-gray-300'} hover:bg-blue-400 transition`}
            >
              {track.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={playMusic}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition"
          >
            Play
          </button>
          <button
            onClick={pauseMusic}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 transition"
          >
            Pause
          </button>
        </div>
      </div>
    </Draggable>
  );
};

export default MusicPlayer;
