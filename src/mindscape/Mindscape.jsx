import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mindscape.css";

export default function Mindscape() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    let playTimeout;
    let fallbackTimeout;

    const handleMessage = (event) => {
      if (event.origin !== "https://player.vimeo.com") return;

      const data =
        typeof event.data === "string" ? JSON.parse(event.data) : event.data;

      if (data.event === "ready") {
        iframeRef.current?.contentWindow.postMessage(
          { method: "addEventListener", value: "play" },
          "*"
        );
        iframeRef.current?.contentWindow.postMessage(
          { method: "addEventListener", value: "error" },
          "*"
        );
      } else if (data.event === "play") {
        playTimeout = setTimeout(() => setShowIntro(false), 2000);
      } else if (data.event === "error") {
        console.error("Vimeo player error:", data.data);
        setShowIntro(false);
      }
    };

    window.addEventListener("message", handleMessage);

    fallbackTimeout = setTimeout(() => {
      console.warn("Vimeo intro fallback: Hiding after timeout");
      setShowIntro(false);
    }, 2000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(playTimeout);
      clearTimeout(fallbackTimeout);
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          <video
            ref={iframeRef}
            src="https://res.cloudinary.com/dyricwenw/video/upload/v1768400131/season5_bn7t6n.mp4"
            autoPlay
            muted
            playsInline
            controls={false}
            className="intro-video"
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

          <div className="register">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc945CLXmaZWr6xltS0YlgsYtMwYRDPO3t_k3KSBUo2k1qwqg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="enter-btn font-courier">
                Click to register (PCCOE students link)
              </button>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7bHXuFs_mUkYmBht-8osTHbQx5eagh6IEK5e-5jX6-mfi_A/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="enter-btn font-courier">
                (Non PCCOE students link)
              </button>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1J-GMujSDPAKjSRoFiAK4GQMU2fG-jRzV/view"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn font-courier"
          >
            Download Rulebook
          </a>
        </div>
      )}
    </>
  );
}
