import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mindscape.css";

export default function Mindscape() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const cursorRef = useRef(null);
  const iframeRef = useRef(null);

  // Handle Vimeo API for dynamic timing and error handling (now fixed to 2s after play)
  useEffect(() => {
    if (!showIntro) return;

    let playTimeout;
    let fallbackTimeout;

    const handleMessage = (event) => {
      // Security: Only accept messages from Vimeo
      if (event.origin !== "https://player.vimeo.com") return;

      const data =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;

      if (data.event === "ready") {
        // Player is loaded; listen for events
        iframeRef.current?.contentWindow.postMessage(
          { method: "addEventListener", value: "play" },
          "*"
        );
        iframeRef.current?.contentWindow.postMessage(
          { method: "addEventListener", value: "error" },
          "*"
        );
      } else if (data.event === "play") {
        // Playback started; hide after exactly 2 seconds
        playTimeout = setTimeout(() => setShowIntro(false), 2000);
      } else if (data.event === "error") {
        // Error occurred; fallback hide immediately
        console.error("Vimeo player error:", data.data);
        setShowIntro(false);
      }
    };

    window.addEventListener("message", handleMessage);

    // Fallback: Hide after 5s max if nothing happens (shorter since 2s is quick)
    fallbackTimeout = setTimeout(() => {
      console.warn("Vimeo intro fallback: Hiding after timeout");
      setShowIntro(false);
    }, 5000);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(playTimeout);
      clearTimeout(fallbackTimeout);
    };
  }, [showIntro]);

  // Custom cursor effect (unchanged)
  useEffect(() => {
    if (showIntro) return;

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => {
      cursor.classList.add("hover");
    };

    const removeHoverEffect = () => {
      cursor.classList.remove("hover");
    };

    const addClickEffect = () => {
      cursor.classList.add("click");
      setTimeout(() => cursor.classList.remove("click"), 300);
    };

    // Track mouse movement
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", addClickEffect);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, .round-card, a"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", addClickEffect);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          <iframe
            ref={iframeRef}
            title="mindscape-intro"
            src="https://player.vimeo.com/video/1141368059?autoplay=1&background=1&playsinline=1&loop=0&muted=1&api=1&player_id=mindscape-intro"
            frameBorder="0"
            allow="autoplay; fullscreen;"
            allowFullScreen
          />
        </div>
      )}

      {!showIntro && (
        <div className="mindscape fade-in">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back to Hawkins
          </button>

          <header className="mindscape-header">
            <div className="title-container">
              <div className="skull-sticker skull-left"></div>
              <h1 className="font-bebas hero-title animate-glow">MINDSCAPE</h1>
            </div>
            <p className="font-courier description">
              A high-stakes technical survival challenge.
              <br />
              Only the sharpest minds escape.
            </p>
          </header>

          <section className="rounds font-courier">
            <h2>🔻 The Trials</h2>

            <div className="round-card">
              <h3>Round 1: Tech Quiz</h3>
            </div>

            <div className="round-card">
              <h3>Round 2: Debug Sprint</h3>
            </div>

            <div className="round-card">
              <h3>Round 3: AI Innovation</h3>
            </div>

            <div className="round-card">
              <h3>Round 4: Competitive Programming</h3>
            </div>
          </section>

          <section className="warning">
            <h2 className="font-courier">Final Warning</h2>
            <p className="font-courier description">
              This is an offline challenge.
              <br />
              No shortcuts. No mercy.
              <br />
              The coordinator's decision is final.
            </p>
          </section>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc945CLXmaZWr6xltS0YlgsYtMwYRDPO3t_k3KSBUo2k1qwqg/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="enter-btn font-courier">
              ENTER THE MINDSCAPE (PCCOE students link)
            </button>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe7bHXuFs_mUkYmBht-8osTHbQx5eagh6IEK5e-5jX6-mfi_A/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="enter-btn font-courier">
              ENTER THE MINDSCAPE (Non PCCOE students link)
            </button>
          </a>

          <a href="/mindscapeRulebook.pdf" download>
            <button className="enter-btn font-courier">
              Download Rulebook
            </button>
          </a>
        </div>
      )}
    </>
  );
}
