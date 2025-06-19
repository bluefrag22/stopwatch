"use client";
import { useState } from "react";
import { getApiKey } from "./apikey";
import { useEffect, useRef } from "react";
import Screen from "./components/screen";
import Buttons from "./components/buttons";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
  const intervalRef = useRef(null);
  const date = new Date();
  const [pressed, setPressed] = useState(false);
  const [weather, setWeather] = useState(null);
  const city = "Lagos"; // or whatever city you want

  useEffect(() => {
    async function fetchWeather() {
      const data = await getApiKey(city);
      if (data) {
        setWeather(data);
      }
    }

    fetchWeather();
  }, []);

  const handlestopwatchtimer = () => {
    setTime((prev) => {
      let { hour, minute, second } = prev;
      second += 1;
      if (second > 59) {
        second = 0;
        minute += 1;
      }
      if (minute > 59) {
        minute = 0;
        hour += 1;
      }
      return { hour, minute, second };
    });
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (isToggled) {
      intervalRef.current = setInterval(() => {
        handlestopwatchtimer();
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isToggled]);


    const resetpress =()=>{
    setPressed(true);
    setTimeout(()=>{setPressed(false)},2000);
  }

  const handleToggle = () => {
    
    setIsToggled((prev) => !prev);
    
  };
  const audio = new Audio("/single-mouse-button-click-351381.mp3")
  const reset = () => {
    audio.play()
    resetpress();
    setIsToggled(false);
    setTime({ hour: 0, minute: 0, second: 0 });
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="bg-[#9BBC0F]  shadow-[0px_15px_0px_#70860d]  w-80 h-90 rounded-2xl p-4 ">
        <Screen date={date} time={time} weather={weather} />

        <Buttons
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          handleToggle={handleToggle}
          reset={reset}
          resetpress={resetpress}
        />
      </div>
    </div>
  );
}
