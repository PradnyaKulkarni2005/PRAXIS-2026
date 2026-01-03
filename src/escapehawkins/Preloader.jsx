import { useEffect, useState } from "react";

export default function Preloader({ onFinish }) {
  const [step, setStep] = useState(0);
  const [fade, setFade] = useState(false);

  const messages = [
    "HAWKINS NATIONAL LABORATORY",
    "DIMENSIONAL BREACH DETECTED",
    "VECNA PROTOCOL: ACTIVE",
    "INITIATING ESCAPE SEQUENCE",
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2200),
      setTimeout(() => setStep(3), 3600),
      setTimeout(() => setFade(true), 5200),
      setTimeout(onFinish, 6200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] transition-opacity duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,0,0,0.2),transparent_60%)] animate-pulse" />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />

      {/* Center */}
      <div className="relative z-10 text-center space-y-10 px-6">

        {/* Orb */}
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-red-900 blur-2xl opacity-30 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-red-800 animate-spin-slow" />
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                step > i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-xs md:text-sm tracking-[0.4em] text-gray-200 font-mono">
                {msg}
              </p>
              <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-red-800 to-transparent" />
            </div>
          ))}
        </div>

        {/* Loader dots */}
        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-red-800 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <p className="text-xs tracking-widest text-gray-400 animate-pulse">
          ACCESSING UPSIDE DOWN
        </p>

        {/* Progress bar */}
        <div className="w-64 h-[2px] bg-gray-800 overflow-hidden">
          <div className="h-full bg-red-800 animate-progress" />
        </div>
      </div>
    </div>
  );
}
