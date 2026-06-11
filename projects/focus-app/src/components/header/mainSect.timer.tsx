import { useState, useEffect } from "react";

export function MainSectTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function clickHandler() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval: any = null;
    // 1. Hier prüfen wir: Läuft der Timer überhaupt (ist isActive true)?
    if (isActive) {
      // 2. Wenn ja, starten wir das Intervall (jede Sekunde / 1000ms):
      interval = setInterval(() => {
   
        if (minutes === 0 && seconds === 0) {
            setIsActive(false);
            return
        }

        // 3. die Kalkulation!
        if (seconds !== 0) {
          setSeconds((prev) => prev - 1);
        } else {
          // Das passiert jetzt immer, wenn die Sekunden 0 erreichen
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
       
      }, 1000);
    }

    // 4. Wichtig: Das Intervall aufräumen, wenn die Komponente stoppt
    return () => clearInterval(interval)
    
  }, [isActive, minutes, seconds]) ;

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen bg-[#07162c]  ">
        <div className="wrapper flex flex-col justify-center items-center bg-blue-950 mx-w-md py-15 px-25 rounded-2xl shadow-lg shadow-black-800/30">
          <div className="timer mb-8 font-semibold text-6xl">
            {minutes}:{String(seconds).padStart(2, "0")}
            {/* string(seconds): wandelt die zahl in string. padStrat(2, '0')Prüft die Länge des Textes. Ist er kürzer als 2 Zeichen, füllt er ihn vorne mit einer '0' auf */}
          </div>
          <div className="focus-session flex justify-center items-center ">
            <span className="w-2 h-2 rounded-full bg-green-600 mx-2 "></span>
            <p>Deep focus Session </p>
          </div>
        </div>

        <div className="btn-container flex justify-center items-center gap-5 mt-10">
          <button
            onClick={clickHandler}
            className=" btn btn-outline btn-primary "
          >
            Start
          </button>
          <button className=" btn btn-primary">Reset</button>
        </div>
      </section>
    </>
  );
}
