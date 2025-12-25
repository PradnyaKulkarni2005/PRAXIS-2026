import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const revealRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const reveal = revealRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;
    let visible = false;

    const animate = () => {
      x += (mouseX - x) * 0.05;
      y += (mouseY - y) * 0.05;

      reveal.style.setProperty("--x", `${x}px`);
      reveal.style.setProperty("--y", `${y}px`);

      requestAnimationFrame(animate);
    };

    animate();

    const move = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      if (!visible) {
        visible = true;
        reveal.classList.add("active");
      }
    };

    const leave = () => {
      visible = false;
      reveal.classList.remove("active");
    };

    hero.addEventListener("mousemove", move);
    hero.addEventListener("mouseleave", leave);

    return () => {
      hero.removeEventListener("mousemove", move);
      hero.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      {/* ================= GATE CONTENT ================= */}
      <section className="gate-section gate-inside-hero">
      
        <div className="container">
          <div className="grid-2-cols" style={{ alignItems: "center" }}>
            {/* Left: Title */}
            <div>
              <h2 className="font-bebas gate-title text-stroke">
                THE
                <br />
                GATE
              </h2>

              <div className="glitch-lines">
                <div className="glitch-line" style={{ width: "60%" }} />
                <div className="glitch-line" style={{ width: "80%" }} />
                <div className="glitch-line" style={{ width: "40%" }} />
              </div>
            </div>          
      
              <div className="stats-grid">
                {[
                  { num: "04", label: "SEASONS" },
                  { num: "34", label: "EPISODES" },
                  { num: "∞", label: "MYSTERIES" },
                ].map((stat, i) => (
                  <div key={i} className="stat-card">
                    <div className="font-bebas stat-number">{stat.num}</div>
                    <div className="font-courier stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* Fire Reveal Overlay */}
      <div className="fire-reveal" ref={revealRef} />
    </section>
  );
};

export default Hero;
