"use client"
import { useEffect,useRef } from "react";



export default function Buttons({ isToggled, setIsToggled, handleToggle,reset,resetpress }) {

  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioRef.current = new Audio("/single-mouse-button-click-351381.mp3");
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex justify-between items-end flex-1 h-6/12 p-4 pb-10">
      <button
        onClick={() => {
          reset();
          playAudio();
        }}
        className={`bg-[#7D7D7D] w-16 h-16 rounded-full mr-4 ${
          resetpress
            ? "drop-shadow-[0px_6px_0px_#4A4A4A]"
            : "drop-shadow-[0px_2px_0px_#4A4A4A]"
        } text-2xl`}
      >
        reset
      </button>

      <div>
        <button
          onClick={() => {
            setIsToggled(true);
            playAudio();
          }}
          className={`bg-[#4CBB17] w-16 h-16 rounded-full mr-4 ${
            !isToggled
              ? "drop-shadow-[0px_6px_0px_#2E7D0C]"
              : "drop-shadow-[0px_2px_0px_#2E7D0C]"
          } text-2xl`}
        >
          <span className="text-[#2E7D0C] text-2xl">▶</span>
        </button>

        <button
          onClick={() => {
            setIsToggled(false);
            playAudio();
          }}
          className={`bg-[#B22222] w-16 h-16 rounded-full ${
            isToggled === true
              ? "drop-shadow-[0px_6px_0px_#7A1B1B]"
              : "drop-shadow-[0px_2px_0px_#7A1B1B]"
          }`}
        >
          <span className="text-[#7A1B1B] text-2xl">⏸</span>
        </button>
      </div>
    </div>
  );
}
