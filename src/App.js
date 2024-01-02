import { useState } from "react";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Menunggu Tahun Baru 2025"])

  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft(){
    const newYearDate = new Date("January 1, 2025 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }

  return (
    <>
      <Particles init={particlesInitialization} options={{ preset: "fireworks" }}/>
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter words={newYearMessage} loop={false} cursorStyle={"_"}/>
        </span>
        <div className="z-50 text-white">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setNewYearMessage(["Selamat Tahun Baru", "2024"])}/>
        </div>
      </div>
    </>
  );
}

export default App;
