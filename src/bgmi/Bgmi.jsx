import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bgmi.css";

export default function Bgmi() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const iframeRef = useRef(null);

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
      } else if (data.event === "play") {
        playTimeout = setTimeout(() => setShowIntro(false), 2000);
      } else if (data.event === "error") {
        setShowIntro(false);
      }
    };

    window.addEventListener("message", handleMessage);
    fallbackTimeout = setTimeout(() => setShowIntro(false), 4000);

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
            src="/season1.mp4"
            autoPlay
            muted
            playsInline
            controls={false}
            className="intro-video"
          />
        </div>
      )}

      {!showIntro && (
        <div className="bgmi fade-in">
          <button className="back-btn" onClick={() => navigate("/")}>
            ← Back to Hawkins
          </button>

          {/* HERO */}
          <header className="bgmi-header">
            <div className="title-container">
              <div className="lights-sticker"></div>
              <h1 className="font-bebas hero-title animate-glow">
                BGMI SHOWDOWN
              </h1>
            </div>

            <p className="font-courier description-top">
              The Ultimate Squad Survival
              <br />
              There are no second chances in the Upside Down.
            </p>
          </header>

          {/* EVENT INFO */}
          <section className="about font-courier">
            <div className="info-grid">
              <div>Team Size: <b>4</b></div>
              <div>Total Rounds: <b>2</b></div>
              <div>Mode: <b>Squad Survival</b></div>
            </div>
          </section>

          {/* ROUNDS */}
          <section className="rounds font-courier">
            <h2>🔻 The Encounter</h2>

            <div className="round-card">
              <h3>Round 1: The Disappearance</h3>
              <p>
                Survive or get eliminated.<br />
              </p>
            </div>

            <div className="round-card">
              <h3>Round 2: Grand Finale</h3>
              <p>
                4 Matches decide everything.<br />
              </p>
            </div>
          </section>

          <section className="warning">
            <h2 className="font-courier">Final Transmission</h2>
            <p className="font-courier description-bottom">
              Mobile phones only.<br />
              Cheating leads to immediate disappearance.<br />
              Referee decisions are final.
            </p>
          </section>

          <div className="register">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5EZezO8t5D6EEZoOvni7RfXA7I6ykyCtM5TjiuM1e5OJLUQ/viewform" target="_blank" rel="noopener noreferrer">
              <button className="enter-btn font-courier">
                Enter the Upside Down
              </button>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1PvrpIrMz9uZhvbOavyl43GeAYAlN5pVH/view"
            download
            className="download-btn font-courier"
          >
            Download Rulebook
          </a>
        </div>
      )}
    </>
  );
}
