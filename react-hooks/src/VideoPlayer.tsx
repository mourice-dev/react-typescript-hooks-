import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();   // directly calling DOM method
    } else {
      videoRef.current.play();    // directly calling DOM method
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (seconds) => {
    videoRef.current.currentTime += seconds; // directly mutating DOM property
  };

  const handleVolume = (e) => {
    videoRef.current.volume = e.target.value; // directly setting volume
  };

  return (
    <div style={{ maxWidth: 600 }}>
      <video
        ref={videoRef}
        width="100%"
        src="https://youtu.be/o5WIOcPLUU4?list=RDLlN8MPS7KQs"
        onEnded={() => setIsPlaying(false)}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <button onClick={() => skip(-10)}>⏪ -10s</button>
        <button onClick={togglePlay}>{isPlaying ? "⏸ Pause" : "▶️ Play"}</button>
        <button onClick={() => skip(10)}>⏩ +10s</button>
      </div>

      <div style={{ marginTop: 8 }}>
        🔊 Volume: <input type="range" min="0" max="1" step="0.1"
          defaultValue="1" onChange={handleVolume} />
      </div>
    </div>
  );
}