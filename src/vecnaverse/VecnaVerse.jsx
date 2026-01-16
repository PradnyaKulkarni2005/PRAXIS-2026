import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./VecnaVerse.css";

export default function VecnaVerse() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vecnaverse fade-in">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Hawkins
      </button>

      <header className="vecna-header">
        <div className="title-container">
          <h1 className="font-bebas hero-title animate-glow">
            VECNAVERSE
          </h1>
        </div>
        <p className="font-courier description">
          A mind-bending challenge testing logic, communication, and memory.
          <br />
          Navigate through puzzles, coordination tasks, and sequence challenges.
        </p>
      </header>

      {/* ROUNDS */}
      <section className="rounds font-courier">
        <h2>The Rounds</h2>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">01</span>
            <span className="round-type">PUZZLE</span>
          </div>
          <h3>Round 1 – Code Breakers</h3>
          <ul className="round-details">
            <li>Puzzle-based round (ciphers, logic grids, patterns)</li>
            <li>Tests logical reasoning & problem-solving</li>
            <li>30 minutes time limit</li>
            <li className="highlight">Top teams qualify based on accuracy & time</li>
          </ul>
        </div>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">02</span>
            <span className="round-type">COORDINATION</span>
          </div>
          <h3>Round 2 – Trust & Guide</h3>
          <ul className="round-details">
            <li>Blindfolded coordination & communication challenge</li>
            <li>One blindfolded member, others give verbal guidance only</li>
            <li className="sub-list-header">Tasks include:</li>
            <li className="sub-item">• Object retrieval</li>
            <li className="sub-item">• Puzzle placement</li>
            <li className="highlight">Top teams advance based on accuracy & completion time</li>
          </ul>
        </div>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">03</span>
            <span className="round-type">FINAL</span>
          </div>
          <h3>Round 3 – Sequence Showdown (Final)</h3>
          <ul className="round-details">
            <li>Memory & communication-based challenge</li>
            <li>One member views symbol sequence (10 seconds)</li>
            <li>Team recreates sequence using symbol tiles</li>
            <li className="highlight">Fastest correct team wins</li>
          </ul>
        </div>
      </section>

      {/* REGISTRATION */}
      <div className="register">
        <a
          href="https://forms.gle/hmrMLAbWa4DnQ3RFA"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            // Add PCCoE registration link here
            window.open("https://forms.gle/hmrMLAbWa4DnQ3RFA", "_blank");
          }}
        >
          <button className="enter-btn font-courier">
            Register - PCCoE Students
          </button>
        </a>

        <a
          href="https://forms.gle/CX1aRZvDdSn27Gxv5"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            // Add Non-PCCoE registration link here
            window.open("https://forms.gle/CX1aRZvDdSn27Gxv5", "_blank");
          }}
        >
          <button className="enter-btn font-courier">
            Register - Non-PCCoE Students
          </button>
        </a>
      </div>

      {/* DOWNLOAD RULEBOOK */}
      <a
        href="https://drive.google.com/file/d/11elnHzn6j8MVtVmBEurH3WycCOAuMgTb/view?usp=drive_link"
        download
        className="download-btn font-courier"
        onClick={(e) => {
          e.preventDefault();
          // Add rulebook download link here
          window.open("https://drive.google.com/file/d/11elnHzn6j8MVtVmBEurH3WycCOAuMgTb/view?usp=drive_link", "_blank");
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Rulebook
      </a>

      {/* WHATSAPP GROUP */}
      <a
        href="https://chat.whatsapp.com/I7Qo1D9hdZoIZpOe9TXr7E"
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
  );
}

