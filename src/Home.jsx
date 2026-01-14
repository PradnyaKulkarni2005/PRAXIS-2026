import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import DemogorgonModel from "./components/DemogorgonModel";
import Hero from "./components/Hero";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const villains = [
    {
      id: 1,
      name: "BGMI",
      alias: "Praxis presents",
      season: "Season 1",
      image:
        "https://res.cloudinary.com/dyricwenw/image/upload/v1768400764/stranger_things__jqzdsz.jpg",
      description:
        "The Ultimate Squad Battle | Skill • Strategy • Survival.",
      threatLevel: 4,
      victims: 6,
      episodes: 8,
      abilities: ["Teleportation", "Enhanced Strength", "Tracking"],
      redirect: "/bgmi"
    },
    {
      id: 2,
      name: "CODE FROM THE UPSIDE DOWN",
      alias: "Technical Challenge",
      season: "Season 2",
      image:
        "https://res.cloudinary.com/dyricwenw/image/upload/v1768400507/Stranger_Things_rawisw.jpg",
      description:
        "A technical event combining Web Development and DSA. Navigate through rounds testing your knowledge, decision-making, and implementation skills.",
      threatLevel: 4,
      victims: 0,
      episodes: 3,
      abilities: ["DSA Fundamentals", "Web Development", "Tech Auction", "Implementation"],
      redirect: "/code-upside-down",
    },
    {
      id: 3,
      name: "VECNAVERSE",
      alias: "Mind Challenge",
      season: "Season 3",
      image:
        "https://images.thedirect.com/media/article_full/vecna-stranger.jpg?imgeng=/cmpr_60/w_1280",
      description:
        "A mind-bending challenge testing logic, communication, and memory. Navigate through puzzles, coordination tasks, and sequence challenges.",
      threatLevel: 4,
      victims: 0,
      episodes: 3,
      abilities: ["Code Breaking", "Trust & Guide", "Sequence Memory"],
      redirect: "/vecnaverse",
    },
    {
      id: 4,
      name: "HAWKINS ESCAPE",
      alias: "GDGC presents",
      season: "Season 4",
      image:
        "https://cdna.artstation.com/p/assets/images/images/024/122/970/large/limkuk-demodogneutral.jpg?1581390593",
      description:
        "Adolescent Demogorgons that hunt in packs. Dart was raised by Dustin before joining the swarm.",
      threatLevel: 3,
      victims: 12,
      episodes: 5,
      abilities: ["Time-Bound Decision Making", "Encrypted Logic Solving", "Team Coordination Under Stress"],
      redirect: "/escape-hawkins",
    },
    {
      id: 5,
      name: "MINDSCAPE",
      alias: "MLSC presents",
      season: "Season 5",
      image:
        "https://res.cloudinary.com/dyricwenw/image/upload/v1768400643/VECNAAAA_lrbwb7.jpg",
      description:
        "Mindscape is a ruthless four-round gauntlet. Survive the elimination, hack the glitch, and crack the code to claim the ultimate title.",
      threatLevel: 3,
      victims: 12,
      episodes: 5,
      abilities: ["Pack Hunting", "Burrowing", "Rapid Growth"],
      redirect: "/mindscape",
    },
  ];

  /* ================= SCROLL TRACKING ================= */

  const bgRef = useRef(null);

  useEffect(() => {
    let latestScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      latestScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translate3d(0, ${
              latestScrollY * 0.5
            }px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= INTRO VIDEO ================= */
  useEffect(() => {
    // Check if video has been shown before
    const hasSeenIntro = localStorage.getItem("praxis-intro-shown");
    
    if (hasSeenIntro === "true") {
      setShowHome(true);
      return;
    }

    const video = videoRef.current;
    if (!video) {
      setShowHome(true);
      localStorage.setItem("praxis-intro-shown", "true");
      return;
    }

    let timeout;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        setShowHome(true);
        localStorage.setItem("praxis-intro-shown", "true");
      }
    };

    tryPlay();

    const onEnded = () => {
      setShowHome(true);
      localStorage.setItem("praxis-intro-shown", "true");
    };
    video.addEventListener("ended", onEnded);

    timeout = setTimeout(() => {
      setShowHome(true);
      localStorage.setItem("praxis-intro-shown", "true");
    }, 8000);

    return () => {
      clearTimeout(timeout);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  /* ================= PARTICLE BACKGROUND ================= */
  useEffect(() => {
    if (!showHome || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.3,
      vx: Math.random() * 0.3 - 0.15,
      vy: Math.random() * 0.3 - 0.15,
      a: Math.random() * 0.6 + 0.1,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseAlpha = p.a * (0.5 + 0.5 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,38,38,${pulseAlpha})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [showHome]);

  return (
    <div>
      {/* ================= INTRO VIDEO ================= */}
      {!showHome && (
        <section className="video-section">
          <video
            ref={videoRef}
            src="/trailer.mp4"
            muted
            playsInline
            autoPlay
            className="video-full"
          />
        </section>
      )}

      {/* ================= HOME ================= */}
      {showHome && (
        <div>
          <canvas ref={canvasRef} className="canvas-bg" />

          {/* ================= SCENE 1: HERO ================= */}
          <section className="hero-section">
            <div ref={bgRef} className="hero-bg-wrapper">
              <img
                src="https://wallpapers.com/images/high/cute-stranger-things-young-squad-t4oeh47ph4opsu0v.webp"
                alt="Background"
                className="hero-bg-image"
              />
            </div>

            <div className="hero-overlay-dark" />
            <div className="hero-overlay-red" />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                textAlign: "center",
                padding: "0 1rem",
              }}
              className="animate-fade-in-up"
            >
              <div className="flip-wrapper">
                <h1 className="font-bebas hero-title animate-glow flip-title">
                  PRAXIS
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                  marginTop: "1.5rem",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    width: "5rem",
                    background:
                      "linear-gradient(to right, transparent, #dc2626)",
                  }}
                />
                <div className="flip-wrapper">
                  <h2 className="font-courier hero-subtitle animate-flicker flip-text">
                    2026
                  </h2>
                </div>
                <div
                  style={{
                    height: "1px",
                    width: "5rem",
                    background:
                      "linear-gradient(to left, transparent, #dc2626)",
                  }}
                />
              </div>

              <div className="flip-wrapper">
                <p className="font-courier hero-tagline flip-text">
                  WELCOME TO THE UPSIDE DOWN
                </p>
              </div>
            </div>

            <div className="scroll-indicator animate-bounce-custom">
              <div className="scroll-mouse">
                <div className="scroll-wheel animate-pulse" />
              </div>
            </div>
          </section>

          {/* ================= SCENE 2: CHAPTERS ================= */}
          <section className="chapters-section">
            <div className="container">
              <div
                className="grid-2-cols"
                style={{ alignItems: "center", gap: "3rem" }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="font-bebas chapters-title">CHAPTERS</h2>
                  </div>

                  <div className="space-y-4 flip-wrapper">
                    <p className="chapter-item font-courier flip-text">
                      <span className="chapter-arrow">▸</span>A disappearance.
                    </p>
                    <p className="chapter-item font-courier flip-text">
                      <span className="chapter-arrow">▸</span>A curse.
                    </p>
                    <p className="chapter-item font-courier flip-text">
                      <span className="chapter-arrow">▸</span>A monster watching
                      from the dark.
                    </p>
                  </div>

                  <p className="font-courier chapters-description">
                    <div className="flip-wrapper">
                      <p className="flip-text">
                        Every chapter pulls you deeper into the Upside Down.
                      </p>
                    </div>
                    <br />
                    <br />
                    <div className="flip-wrapper">
                      <p className="flip-text">
                        Where shadows breathe and nightmares become real.
                      </p>
                    </div>
                  </p>
                </div>

                <div className="chapters-model-wrapper">
                  <DemogorgonModel />
                </div>
              </div>
            </div>
          </section>

          {/* ================= SCENE 3: GATE ================= */}
          <section className="hero">
            <Hero />
          </section>

          {/* ================= SCENE 4: VILLAINS ================= */}
          <section className="villains-section">
            <div className="villains-header">
              <h2 className="font-bebas villains-title animate-fade-in-up">
                FORCES OF DARKNESS
              </h2>
              <p className="font-courier villains-subtitle">
                The Entities That Haunt Hawkins
              </p>
            </div>

            <div className="villains-grid">
              {villains.map((villain, index) => (
                <div
                  key={villain.id}
                  className="villain-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
  if (villain.redirect) {
    navigate(villain.redirect);
  }
}}

                >
                  <div className="villain-image-container">
                    <img
                      src={villain.image}
                      alt={villain.name}
                      className="villain-image"
                    />
                    <span className="villain-season-badge font-bebas">
                      {villain.season}
                    </span>
                    <div className="villain-overlay">
                      <h3 className="font-bebas villain-name">
                        {villain.name}
                      </h3>
                    </div>
                  </div>

                  <div className="villain-content">
                    <p className="font-courier villain-alias">
                      "{villain.alias}"
                    </p>

                    <p className="font-courier villain-description">
                      {villain.description}
                    </p>

                    <div className="villain-threat-level">
                      <span className="font-courier threat-label">
                        Threat Level:
                      </span>
                      <div className="threat-dots">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`threat-dot ${
                              i < villain.threatLevel ? "active" : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="villain-abilities">
                      {villain.abilities.map((ability, i) => (
                        <span key={i} className="ability-tag font-courier">
                          {ability}
                        </span>
                      ))}
                    </div>

                    <div className="villain-stats">
                      <div className="villain-stat">
                        <div className="stat-value font-bebas">
                          {villain.victims}
                        </div>
                        <div className="stat-name font-courier">Victims</div>
                      </div>
                      <div className="villain-stat">
                        <div className="stat-value font-bebas">
                          {villain.episodes}
                        </div>
                        <div className="stat-name font-courier">Episodes</div>
                      </div>
                      <div className="villain-stat">
                        <div className="stat-value font-bebas">
                          {villain.threatLevel}/5
                        </div>
                        <div className="stat-name font-courier">Threat</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= SCENE 5: COLLECTION ================= */}
          <section className="collection-section">
            <div className="collection-bg-pattern" />

            <div
              style={{
                textAlign: "center",
                maxWidth: "64rem",
                padding: "0 1.5rem",
                position: "relative",
                zIndex: 10,
              }}
              className="space-y-8"
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <h2 className="font-bebas collection-title">COLLECTION</h2>
              </div>

              <div className="glass-effect collection-content">
                <p className="font-courier collection-text">
                  <span className="block">Moments.</span>
                  <span className="block">Episodes.</span>
                  <span className="block collection-highlight">
                    Memories that refuse to die.
                  </span>
                </p>
              </div>

              <div className="collection-grid">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="grid-item" />
                ))}
              </div>
            </div>
          </section>

          {/* ================= FOOTER ================= */}
          <footer className="footer">
            <div className="footer-content">
              <p className="font-courier footer-copyright">©2026pccoe</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
