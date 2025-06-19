export default function Screen({date, time, weather}) {
  return (
    <div className="relative bg-black rounded-2xl p-2 flex-1 h-6/12 mb-4 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[150%] h-[40px] bg-white opacity-4 rotate-12 top-6 left-[5%]"></div>
        <div className="absolute w-[150%] h-[40px] bg-white opacity-4 rotate-12 top-16 left-[-35%]"></div>
        <div className="absolute w-[150%] h-[40px] bg-white opacity-4 rotate-12 top-29 left-[-55%]"></div>
      </div>

      <div className="flex justify-between h-6/12">
            <h2 className="w-24a flex justify-center items-center p-2 h-8 text-center text-sm text-[#00FF00] border-2 border-[#00FF00] rounded-lg font-mono drop-shadow-[0_0_6px_#00FF00]">
              {`${date.getHours()}:${date.getMinutes()} ${
                date.getHours() >= 12 ? "pm" : "am"
              }`}
            </h2>
            <p className="w-24a flex justify-center items-center p-2 h-8 text-center text-sm text-[#00FF00] border-2 border-[#00FF00] rounded-lg font-mono drop-shadow-[0_0_6px_#00FF00]">
              {weather
                ? `${weather.name} ${Math.round(weather.main.temp)}°C`
                : "Loading..."}
            </p>
          </div>

          <div className="flex justify-between  items-end h-6/12 ">
            <h2 className="text-5xl text-[#00FF00] font-mono drop-shadow-[0_0_6px_#00FF00]">
              {time.hour}:{time.minute}:{time.second}
            </h2>
            <p>⌚</p>
          </div>

    </div>
  );
}
