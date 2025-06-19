"use client"




export default function Buttons({ isToggled, setIsToggled, handleToggle,reset,resetpress }) {
  const audio = new Audio("/single-mouse-button-click-351381.mp3")
  return (
    <div className="flex justify-between items-end flex-1 h-6/12 p-4 pb-10">
        
      <button onClick={reset} className={`bg-[#7D7D7D] w-16 h-16 rounded-full mr-4 ${resetpress? "drop-shadow-[0px_6px_0px_#4A4A4A]":"drop-shadow-[0px_2px_0px_#4A4A4A]"}  text-2xl`}>
        reset
      </button>

    

      <div className="">
        <button
          onClick={() => { setIsToggled(true); audio.play(); }}
          className={`bg-[#4CBB17] w-16 h-16  rounded-full mr-4 ${!isToggled? "drop-shadow-[0px_6px_0px_#2E7D0C]":"drop-shadow-[0px_2px_0px_#2E7D0C]"}  text-2xl`}
        >
          <span className="text-[#2E7D0C] text-2xl">▶</span>
        </button>

        <button
          onClick={() => { setIsToggled(false); audio.play(); }}
          className={`bg-[#B22222] w-16 h-16  rounded-full ${isToggled===true? "drop-shadow-[0px_6px_0px_#7A1B1B]":"drop-shadow-[0px_2px_0px_#7A1B1B]"} `}
        >
          <span className="text-[#7A1B1B] text-2xl">⏸</span>
        </button>
      </div>

      {/* <button
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
          isToggled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isToggled ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </button> */}
    </div>
  );
}
