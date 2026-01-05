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
    </div>
  );
}

