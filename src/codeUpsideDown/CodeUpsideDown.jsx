import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./CodeUpsideDown.css";

export default function CodeUpsideDown() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="code-upside-down fade-in">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Hawkins
      </button>

      <header className="code-header">
        <div className="title-container">
          <h1 className="font-bebas hero-title animate-glow">
            CODE FROM THE UPSIDE DOWN
          </h1>
        </div>
        <p className="font-courier description">
          A technical event combining Web Development and Data Structures & Algorithms.
          <br />
          Navigate through rounds that test your knowledge, decision-making, and implementation skills.
        </p>
      </header>

      {/* ABOUT EVENT */}
      <section className="about font-courier">
        <h2>About the Event</h2>
        <div className="about-card">
          <p>
            Code From the Upside Down is a technical event that combines Web Development 
            and Data Structures & Algorithms (DSA). Participants go through multiple rounds 
            that test their DSA knowledge, decision-making, and web development skills, 
            ending with a hands-on website building challenge.
          </p>
        </div>
      </section>

      {/* ROUNDS */}
      <section className="rounds font-courier">
        <h2>The Rounds</h2>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">01</span>
            <span className="round-type">ELIMINATION</span>
          </div>
          <h3>Round 1 – Fast DSA Quiz</h3>
          <ul className="round-details">
            <li>Rapid-fire quiz based on DSA fundamentals</li>
            <li>Topics include arrays, stacks, queues, searching, sorting, and complexity</li>
            <li>MCQs and short logic-based questions</li>
            <li>Time-bound elimination round</li>
            <li className="highlight">Top teams qualify for Round 2</li>
          </ul>
        </div>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">02</span>
            <span className="round-type">AUCTION</span>
          </div>
          <h3>Round 2 – Tech & Logic Auction</h3>
          <ul className="round-details">
            <li>Teams receive virtual points + some fix points at the start based on Round 1 performance</li>
            <li className="sub-list-header">Auction items include:</li>
            <li className="sub-item">• Web Development Tech Stacks</li>
            <li className="sub-item">• Development Tools & Libraries</li>
            <li className="sub-item">• DSA Concepts to be used in final build</li>
            <li className="sub-item">• Sabotages / Constraints</li>
            <li className="highlight">Auction outcomes define the constraints and advantages for Round 3</li>
          </ul>
        </div>

        <div className="round-card">
          <div className="round-header">
            <span className="round-number">03</span>
            <span className="round-type">IMPLEMENTATION</span>
          </div>
          <h3>Round 3 – Implementation Round</h3>
          <ul className="round-details">
            <li className="sub-list-header">Teams build a blog-based web application</li>
            <li className="sub-list-header">Website must include:</li>
            <li className="sub-item">• Explanation of the DSA concept won in auction</li>
            <li className="sub-item">• Scratch MIT implementation to visually demonstrate the algorithm</li>
            <li className="sub-item">• Scratch project must be embedded or linked within the website</li>
            <li className="sub-list-header">Evaluation based on:</li>
            <li className="sub-item">• Correct DSA logic</li>
            <li className="sub-item">• Web UI/UX and information included in it</li>
            <li className="sub-item">• Use of auctioned tech stack and tools</li>
            <li className="sub-item">• Completion within given time</li>
          </ul>
        </div>
      </section>

      {/* REGISTRATION */}
      <div className="register">
        <a
          href="https://forms.gle/R9XuQkLh9H8MzV7i8"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            // Add PCCoE registration link here
            window.open("https://forms.gle/R9XuQkLh9H8MzV7i8", "_blank");
          }}
        >
          <button className="enter-btn font-courier">
            Register - PCCoE Students
          </button>
        </a>

        <a
          href="https://forms.gle/XJf4oDSY1uodKuBh6"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            // Add Non-PCCoE registration link here
          window.open("https://forms.gle/XJf4oDSY1uodKuBh6", "_blank");
          }}
        >
          <button className="enter-btn font-courier">
            Register - Non-PCCoE Students
          </button>
        </a>
      </div>

      {/* DOWNLOAD RULEBOOK */}
      <a
        href="https://drive.google.com/file/d/1H3Y9nBxIlxOKTRbTvusLjDan_oxg2DFh/view"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn font-courier"
        onClick={(e) => {
          e.preventDefault();
          // Add rulebook download link here
          window.open("https://drive.google.com/file/d/1H3Y9nBxIlxOKTRbTvusLjDan_oxg2DFh/view", "_blank");
        }}
      >
        Download Rulebook
      </a>
    </div>
  );
}

