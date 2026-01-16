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
            src="https://res.cloudinary.com/dyricwenw/video/upload/v1768400137/season1_qx8api.mp4"
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
            href="https://drive.google.com/file/d/1bNzmojr-O-KYd54HFzuzk3Urf0Jp-YNO/view?usp=sharing"
            download
            className="download-btn font-courier"
          >
            Download Rulebook
          </a>

          <a
            href="https://chat.whatsapp.com/YOUR_BGMI_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn font-courier"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Join WhatsApp Group
          </a>
        </div>
      )}
    </>
  );
}
