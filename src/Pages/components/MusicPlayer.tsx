import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Starting position (relative to the window)
  const [dragging, setDragging] = useState(false);
  const [showPlayer, setShowPlayer] = useState(true);
  const playerRef = useRef<HTMLDivElement | null>(null);

  // Music track list with names and paths
  const tracks = [
    { name: 'Motivational', src: '/aspire-motivation-274371.mp3' },
    { name: 'Calm', src: '/inspirational-calm-emotional-272593.mp3' },
    { name: 'Happy', src: '/good-morning-upbeat-happy-ukulele-244395.mp3' }
  ];

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const changeTrack = (index: number) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setCurrentTrack(index);

    const newTrack = tracks[index];
    if (audioRef.current) {
      audioRef.current.src = newTrack.src;
      audioRef.current.load();
      audioRef.current.oncanplaythrough = () => {
        audioRef.current?.play();
      };
    }
  };

  // Dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!playerRef.current) return;

    e.preventDefault(); // Prevent text selection while dragging
    setDragging(true);

    const offsetX = e.clientX - playerRef.current.getBoundingClientRect().left;
    const offsetY = e.clientY - playerRef.current.getBoundingClientRect().top;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (dragging) {
        setPosition({
          x: moveEvent.clientX - offsetX,
          y: moveEvent.clientY - offsetY,
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Location-based display
  const location = useLocation();
  const hiddenPaths = [
    '/login',
    '/signup',
    '/consultant-login',
    '/consultant-signup',
    '/user-consultant',
    '/consultant-dashboard'
  ];

  if (hiddenPaths.includes(location.pathname)) {
    return null; // Don't render MusicPlayer for hidden pages
  }

  if (!showPlayer) {
    return null; // Close the player
  }

  return (
    <div
      ref={playerRef}
      className="fixed bg-gray-100 p-4 w-80 rounded-xl shadow-lg"
      style={{
        top: position.y || 'auto',
        right: '4rem',  // Fixed distance from the right edge
        bottom: '4rem', // Keep it a bit above the bottom edge
        left: 'auto',
      }}
      onMouseDown={handleMouseDown} // Attach the mouse down event to the player div
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-xl font-bold text-red-600"
        onClick={() => setShowPlayer(false)}
      >
        &times;
      </button>

      <h3 className="text-lg font-semibold mb-4 text-center">Relax with Motivational Music</h3>
      <audio ref={audioRef} src={tracks[currentTrack].src} />

      <div className="mb-4 flex space-x-2 justify-center">
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => changeTrack(index)}
            className={`px-3 py-2 rounded-lg text-white ${
              currentTrack === index ? 'bg-blue-500' : 'bg-gray-300'
            } hover:bg-blue-400 transition`}
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
  );
};

export default MusicPlayer;
