import React from 'react';

const RelaxingMusicPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://example.com/your-image.jpg)' }}>
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-10" />
      <div className="z-20 text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Relaxing & Meditate</h1>
        <p className="text-lg mb-8">
          Immerse yourself in soothing music that enhances your mental well-being and boosts motivation. Let the calm sound waves guide you towards peace and focus.
        </p>

        <div className="relative z-20">
          <audio controls className="w-full max-w-md mx-auto">
          <source src="https://www.bensound.com/bensound-music/bensound-relaxing.mp3" type="audio/mp3" />

            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="mt-8 text-sm text-white opacity-75">
          <p>Relax and let the music guide your journey.</p>
        </div>
      </div>
    </div>
  );
};

export default RelaxingMusicPage;
