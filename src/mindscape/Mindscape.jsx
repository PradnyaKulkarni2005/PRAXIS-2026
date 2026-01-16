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

          <a
            href="https://chat.whatsapp.com/Jrd2CK7Jrgm5dtySQ9RQnq"
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
