import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(
    new Audio("/backgroundmusic.mp3")
  );

  const [isPlaying, setIsPlaying] = useState(false); // browser forces false

  // setup once
  audioRef.current.loop = true;
  audioRef.current.volume = 0.5;

  const toggleAudio = async () => {
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play(); // MUST be called from click
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio blocked:", err);
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
