import { useEffect, useState } from "react";

export default function Hawkins() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-gray-200 font-mono overflow-hidden">

      {/* Background glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(139,0,0,0.12),transparent_60%)] animate-pulse-slow" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom,rgba(185,28,28,0.08),transparent_60%)]" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-red-900 rounded-full opacity-20 animate-spin-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <main
        className={`relative z-10 max-w-5xl mx-auto px-6 py-24 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >

        {/* INCIDENT REPORT */}
        <section className="mb-28 border-l-4 border-red-900 pl-8">
          <h2 className="text-sm tracking-[0.5em] text-red-800 mb-6 animate-blink">
            INCIDENT REPORT
          </h2>

          <p className="leading-loose mb-4">
            <span className="text-red-700 font-bold">CLASSIFIED //</span>{" "}
            Dimensional membrane failure detected. Reality anchors unstable.
          </p>

          <p className="text-gray-400 mb-4">
            Subjects report temporal distortion, hallucinations, and
            psychological decay.
          </p>

          <p className="italic text-gray-500">
            Escape before containment is permanent.
          </p>
        </section>

        {/* ROUND 1 */}
        <section className="mb-32 border border-red-900/40 p-10 hover:shadow-[0_0_30px_rgba(139,0,0,0.2)] transition">
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl text-red-900 font-bold">01</span>
            <span className="text-xs tracking-[0.3em] text-gray-400">ONLINE</span>
          </div>

          <h3 className="text-3xl tracking-widest mb-8">THE FRACTURE</h3>

          <ul className="space-y-3 text-gray-400">
            <li><span className="text-red-700">L1</span> Technical MCQs</li>
            <li><span className="text-red-700">L2</span> Code Debugging</li>
            <li><span className="text-red-700">L3</span> Logic Riddles</li>
            <li><span className="text-red-700">L4</span> OS Concepts</li>
            <li><span className="text-red-700">L5</span> Cryptography</li>
          </ul>

          <div className="mt-8 p-4 border border-red-800/50 bg-red-900/10">
            <p className="text-sm text-red-600">
              ⚠ Wrong final answer results in immediate disqualification
            </p>
          </div>
        </section>

        {/* ROUND 2 */}
        <section className="mb-32 border border-red-800/40 p-10 hover:shadow-[0_0_30px_rgba(185,28,28,0.2)] transition">
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl text-red-700 font-bold">02</span>
            <span className="text-xs tracking-[0.3em] text-gray-400">OFFLINE</span>
          </div>

          <h3 className="text-3xl tracking-widest mb-8">CREEL HOUSE</h3>

          <ul className="space-y-3 text-gray-400">
            <li><span className="text-red-600">M1</span> System Logic</li>
            <li><span className="text-red-600">M2</span> Debugging</li>
            <li><span className="text-red-600">M3</span> Decryption</li>
            <li><span className="text-red-600">M4</span> IT Decision Making</li>
          </ul>

          <div className="mt-8 p-4 border border-red-700/50 bg-red-900/10">
            <p className="text-sm text-red-600">
              ⚠ No external communication permitted
            </p>
          </div>
        </section>

        {/* WINNER PROTOCOL */}
        <section className="mb-32 border-t border-red-900 pt-12">
          <h3 className="text-sm tracking-[0.5em] text-red-800 mb-8">
            WINNER PROTOCOL
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>→ First 3 teams escape</li>
            <li>→ Speed is critical</li>
            <li className="text-red-700 font-bold">
              ✕ Failure leads to permanent containment
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center space-y-8">
          <h2 className="text-sm tracking-[0.6em] text-red-700 animate-pulse-slow">
            HE IS CALLING
          </h2>

          <a
            href="https://forms.google.com/pccoe"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-2 border-red-900 py-4 tracking-widest hover:bg-red-900/20 transition"
          >
            REGISTER — PCCOE STUDENTS
          </a>

          <a
            href="https://forms.google.com/non-pccoe"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-2 border-red-900 py-4 tracking-widest hover:bg-red-900/20 transition"
          >
            REGISTER — NON-PCCOE STUDENTS
          </a>

          <a
            href="/rulebook.pdf"
            download
            className="block border border-red-700 py-3 text-sm tracking-widest hover:bg-red-900/30 transition"
          >
            DOWNLOAD RULEBOOK
          </a>

          <p className="text-xs tracking-[0.4em] text-gray-500 pt-6">
            THERE IS NO TURNING BACK
          </p>
        </section>

      </main>
    </div>
  );
}
