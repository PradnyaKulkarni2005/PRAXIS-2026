import React, { useEffect, useRef, useState } from "react";
import "./App.css"; // Import the CSS file

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Villain Characters Data
  const villains = [
    {
      id: 1,
      name: "Demogorgon",
      alias: "The Monster",
      season: "Season 1",
      image: "https://wallpapers.com/images/high/demogorgon-stranger-things-8z16phmzlp6bsj2g.webp",
      description: "A predatory humanoid creature from the Upside Down. The first supernatural threat faced by the kids of Hawkins.",
      threatLevel: 4,
      victims: 6,
      episodes: 8,
      abilities: ["Teleportation", "Enhanced Strength", "Tracking"]
    },
    {
      id: 2,
      name: "Mind Flayer",
      alias: "The Shadow Monster",
      season: "Season 2",
      image: "https://wallpapers.com/images/high/red-mind-flayer-stranger-things-phone-ek4f5jjtr9ngkdek.webp",
      description: "A massive, spider-like entity that serves as the hive mind of the Upside Down. Commands an army of possessed hosts.",
      threatLevel: 5,
      victims: 15,
      episodes: 12,
      abilities: ["Mind Control", "Possession", "Hive Mind"]
    },
    {
      id: 3,
      name: "Vecna",
      alias: "One / Henry Creel",
      season: "Season 4",
      image: "https://images.thedirect.com/media/article_full/vecna-stranger.jpg?imgeng=/cmpr_60/w_1280",
      description: "The first test subject and true master of the Upside Down. Targets victims through psychological trauma and curses.",
      threatLevel: 5,
      victims: 4,
      episodes: 9,
      abilities: ["Psychic Powers", "Mind Manipulation", "Reality Warping"]
    },
    {
      id: 4,
      name: "Demodogs",
      alias: "Dart's Family",
      season: "Season 2",
      image: "https://cdna.artstation.com/p/assets/images/images/024/122/970/large/limkuk-demodogneutral.jpg?1581390593",
      description: "Adolescent Demogorgons that hunt in packs. Dart was raised by Dustin before joining the swarm.",
      threatLevel: 3,
      victims: 12,
      episodes: 5,
      abilities: ["Pack Hunting", "Burrowing", "Rapid Growth"]
    }
  ];

  /* ================= SCROLL TRACKING ================= */
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= INTRO VIDEO ================= */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      setShowHome(true);
      return;
    }

    let timeout;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        setShowHome(true);
      }
    };

    tryPlay();

    const onEnded = () => setShowHome(true);
    video.addEventListener("ended", onEnded);

    timeout = setTimeout(() => {
      setShowHome(true);
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
      particles.forEach(p => {
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
          {/* Particles */}
          <canvas ref={canvasRef} className="canvas-bg" />

          {/* ================= SCENE 1: HERO ================= */}
          <section className="hero-section">
            {/* Background Image with Parallax */}
            <div style={{ 
              position: 'absolute',
              inset: 0,
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 100ms'
            }}>
              <img
                src="https://wallpapers.com/images/high/cute-stranger-things-young-squad-t4oeh47ph4opsu0v.webp"
                alt="Background"
                className="hero-bg-image"
              />
            </div>

            {/* Overlays */}
            <div className="hero-overlay-dark" />
            <div className="hero-overlay-red" />

            {/* Title */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1rem' }} 
                 className="animate-fade-in-up">
              <h1 className="font-bebas hero-title animate-glow">
                PRAXIS
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
                <div style={{ height: '1px', width: '5rem', background: 'linear-gradient(to right, transparent, #dc2626)' }} />
                <h2 className="font-courier hero-subtitle animate-flicker">
                  2025
                </h2>
                <div style={{ height: '1px', width: '5rem', background: 'linear-gradient(to left, transparent, #dc2626)' }} />
              </div>
              
              <p className="font-courier hero-tagline">
                WELCOME TO THE UPSIDE DOWN
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator animate-bounce-custom">
              <div className="scroll-mouse">
                <div className="scroll-wheel animate-pulse" />
              </div>
            </div>
          </section>

          {/* ================= SCENE 2: CHAPTERS ================= */}
          <section className="chapters-section">
            <div className="container">
              <div className="grid-2-cols" style={{ alignItems: 'center' }}>
                {/* Left Side */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-bebas chapters-title">
                      CHAPTERS
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="chapter-item font-courier">
                      <span className="chapter-arrow">▸</span>
                      A disappearance.
                    </p>
                    <p className="chapter-item font-courier">
                      <span className="chapter-arrow">▸</span>
                      A curse.
                    </p>
                    <p className="chapter-item font-courier">
                      <span className="chapter-arrow">▸</span>
                      A monster watching from the dark.
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} className="space-y-6">
                  <p className="font-courier chapters-description">
                    Every chapter pulls you deeper into the Upside Down.
                    <br /><br />
                    Where shadows breathe and nightmares become real.
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="decorative-lines">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="decorative-line" style={{ width: '3rem' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SCENE 3: GATE ================= */}
          <section className="gate-section">
            {/* Background Effects */}
            <div className="gate-bg-effect">
              <div className="gate-glow-left" />
              <div className="gate-glow-right" />
            </div>

            <div className="container">
              <div className="grid-2-cols" style={{ alignItems: 'center' }}>
                {/* Left: Title */}
                <div>
                  <h2 className="font-bebas gate-title text-stroke">
                    THE
                    <br />
                    GATE
                  </h2>
                  
                  {/* Glitch Lines */}
                  <div className="glitch-lines">
                    <div className="glitch-line" style={{ width: '60%' }} />
                    <div className="glitch-line" style={{ width: '80%' }} />
                    <div className="glitch-line" style={{ width: '40%' }} />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="space-y-8">
                  <div className="glass-effect space-y-6" style={{ padding: '2rem', borderRadius: '0.5rem' }}>
                    <p className="font-courier gate-description">
                      Two worlds collide.
                      <br />
                      The gate is open.
                      <br />
                      There is no turning back.
                    </p>
                    
                    <div style={{ paddingTop: '1rem' }}>
                      <button className="btn font-bebas">
                        <span>ENTER</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="stats-grid">
                    {[
                      { num: '04', label: 'SEASONS' },
                      { num: '34', label: 'EPISODES' },
                      { num: '∞', label: 'MYSTERIES' }
                    ].map((stat, i) => (
                      <div key={i} className="stat-card">
                        <div className="font-bebas stat-number">{stat.num}</div>
                        <div className="font-courier stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                      <h3 className="font-bebas villain-name">{villain.name}</h3>
                    </div>
                  </div>

                  <div className="villain-content">
                    <p className="font-courier villain-alias">"{villain.alias}"</p>
                    
                    <p className="font-courier villain-description">
                      {villain.description}
                    </p>

                    <div className="villain-threat-level">
                      <span className="font-courier threat-label">Threat Level:</span>
                      <div className="threat-dots">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`threat-dot ${i < villain.threatLevel ? 'active' : ''}`}
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
                        <div className="stat-value font-bebas">{villain.victims}</div>
                        <div className="stat-name font-courier">Victims</div>
                      </div>
                      <div className="villain-stat">
                        <div className="stat-value font-bebas">{villain.episodes}</div>
                        <div className="stat-name font-courier">Episodes</div>
                      </div>
                      <div className="villain-stat">
                        <div className="stat-value font-bebas">{villain.threatLevel}/5</div>
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
            {/* Background Pattern */}
            <div className="collection-bg-pattern" />

            <div style={{ textAlign: 'center', maxWidth: '64rem', padding: '0 1.5rem', position: 'relative', zIndex: 10 }} className="space-y-8">
              {/* Title */}
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h2 className="font-bebas collection-title">
                  COLLECTION
                </h2>
              </div>

              {/* Content */}
              <div className="glass-effect collection-content">
                <p className="font-courier collection-text">
                  <span className="block">Moments.</span>
                  <span className="block">Episodes.</span>
                  <span className="block collection-highlight">Memories that refuse to die.</span>
                </p>
              </div>

              {/* Grid Pattern */}
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
              <p className="font-courier footer-copyright">
                © 2025 RYUSANDJR
              </p>
              
              <nav className="footer-nav font-courier">
                <a href="#" className="footer-link">ABOUT</a>
                <a href="#" className="footer-link">EPISODES</a>
                <a href="#" className="footer-link">CONTACT</a>
              </nav>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}