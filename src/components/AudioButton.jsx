import { useAudio } from "../context/AudioContext";
import "./AudioButton.css";

const AudioButton = () => {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button className="audio-btn" onClick={toggleAudio} aria-label="Toggle Audio">
      {isPlaying ? (
        // Speaker ON icon
        <svg viewBox="0 0 24 24">
          <path d="M3 10v4h4l5 5V5L7 10H3z" />
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
        </svg>
      ) : (
        // Speaker OFF (muted) icon
        <svg viewBox="0 0 24 24">
          <path d="M3 10v4h4l5 5V5L7 10H3z" />
          <line x1="16" y1="9" x2="22" y2="15" />
          <line x1="22" y1="9" x2="16" y2="15" />
        </svg>
      )}
    </button>
  );
};

export default AudioButton;
