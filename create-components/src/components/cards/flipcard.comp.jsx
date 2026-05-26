import { useEffect, useRef } from "react";

export function FlipCard({title}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "absolute w-2 h-2 bg-gradient-to-r from-red-400 via-cyan-400 to-blue-400 rounded-full pointer-events-none animate-floatParticle";

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const left = rect.left + Math.random() * rect.width;
      const top = rect.top + rect.height - 15;

      particle.style.left = left + "px";
      particle.style.top = top + "px";
      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 3500);
    };

    const interval = setInterval(createParticle, 500);

    // Initial particles
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createParticle(), i * 150);
    }

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    const messages = ["You're Awesome!", "Best Card Ever!", "Unique Creation!"];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMsg);
  };

  return (
    <>
      <style>{`
        @keyframes floatParticle {
          0% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0.8; 
          }
          100% { 
            transform: translateY(-150px) translateX(60px) scale(0); 
            opacity: 0; 
          }
        }
        .animate-floatParticle {
          animation: floatParticle 3.5s infinite ease-out;
        }
        .flip-card {
          perspective: 2000px;
        }
        .flip-card-inner {
          transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-front, .flip-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
        .glow-rare {
          transition: all 0.4s;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
        }
        .glow-rare:hover {
          background: rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 30px rgba(78, 205, 196, 0.8);
          transform: scale(1.05);
        }
      `}</style>

      <div className=" flex items-center justify-center min-h-screen overflow-hidden relative">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/stardust.png")',
          }}
        ></div>

        {/* Flip Card Container */}
        <div ref={cardRef} className="flip-card relative w-96 h-[32rem]">
          <div className="flip-card-inner relative w-full h-full">
            {/* Front Side */}
            <div className="flip-front absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
              <img
                src="https://picsum.photos/id/104/500/500"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                alt="Front Card"
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <i
                  className="fas fa-gem text-6xl mb-4"
                  style={{ color: "#ffd700" }}
                ></i>
                <h2 className="text-3xl font-black tracking-wider mb-2">
                  {title || 'PREMIUM CARD'}
                </h2>
                <div className="w-20 h-1 bg-white/50 rounded-full my-4"></div>
                <p className="text-lg opacity-90 flex items-center gap-2">
                  <i className="fas fa-hand-pointer text-sm"></i> Hover to Flip
                </p>
              </div>
            </div>

            {/* Back Side */}
            <div className="flip-back absolute w-full h-full rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
              <img
                src="https://picsum.photos/id/106/500/500"
                className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
                alt="Back Card"
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-6 text-center backdrop-blur-md bg-black/20">
                <div className="relative">
                  <img
                    src="https://picsum.photos/id/100/100/100"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl mb-4"
                    alt="Profile"
                  />
                  <i className="fas fa-circle-check absolute -bottom-1 -right-1 text-2xl bg-white rounded-full text-green-500 p-1"></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">Amazing Creation</h3>
                <p className="text-sm opacity-90 mb-4">
                  This is my unique card with blur effect
                </p>
                <button
                  onClick={handleButtonClick}
                  className="glow-rare mt-2 px-6 py-2 rounded-full backdrop-blur-md transition font-semibold flex items-center gap-2 mx-auto text-white"
                >
                  <i className="far fa-hand-peace"></i> Interact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
