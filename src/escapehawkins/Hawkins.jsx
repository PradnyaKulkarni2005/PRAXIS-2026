import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hawkins.css";

export default function Hawkins() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMounted(true);
  }, []);

  return (
    <div className="hawkins-container">
      <button className="hawkins-back-btn" onClick={() => navigate("/")}>
        ← Back to Hawkins
      </button>

      {/* Content */}
      <main className={`hawkins-content ${mounted ? "mounted" : ""}`}>
        {/* Lab Report Header */}
        <div className="lab-header">
          <div className="lab-header-top">
            <div className="lab-logo">HAWKINS NATIONAL LABORATORY</div>
            <div className="lab-id">Report ID: HNL-2026-ESCAPE-001</div>
          </div>
          <div className="lab-header-info">
            <div className="lab-info-item">
              <span className="lab-label">Date:</span>
              <span className="lab-value">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="lab-info-item">
              <span className="lab-label">Status:</span>
              <span className="lab-value lab-status-critical">CRITICAL</span>
            </div>
            <div className="lab-info-item">
              <span className="lab-label">Classification:</span>
              <span className="lab-value lab-classified">CONFIDENTIAL</span>
            </div>
          </div>
        </div>

        {/* Test Results Summary */}
        <section className="lab-section">
          <h2 className="lab-section-title">TEST RESULTS SUMMARY</h2>
          <div className="lab-results-grid">
            <div className="lab-result-item">
              <div className="lab-result-label">Dimensional Membrane</div>
              <div className="lab-result-value lab-result-fail">FAILURE DETECTED</div>
            </div>
            <div className="lab-result-item">
              <div className="lab-result-label">Reality Anchors</div>
              <div className="lab-result-value lab-result-fail">UNSTABLE</div>
            </div>
            <div className="lab-result-item">
              <div className="lab-result-label">Subject Status</div>
              <div className="lab-result-value lab-result-warning">TEMPORAL DISTORTION</div>
            </div>
          </div>
          <div className="lab-note">
            <strong>Note:</strong> Escape protocol must be initiated before containment becomes permanent.
          </div>
        </section>

        {/* TEST PHASE 1 */}
        <section className="lab-section">
          <div className="lab-phase-header">
            <div className="lab-phase-number">TEST PHASE 01</div>
            <div className="lab-phase-type">ONLINE ASSESSMENT</div>
          </div>
          <h3 className="lab-phase-title">THE FRACTURE</h3>
          
          <table className="lab-test-table">
            <thead>
              <tr>
                <th>Test Code</th>
                <th>Test Description</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="lab-test-code">L1</td>
                <td>Technical MCQs</td>
                <td>Multiple Choice</td>
              </tr>
              <tr>
                <td className="lab-test-code">L2</td>
                <td>Code Debugging</td>
                <td>Practical</td>
              </tr>
              <tr>
                <td className="lab-test-code">L3</td>
                <td>Logic Riddles</td>
                <td>Analytical</td>
              </tr>
              <tr>
                <td className="lab-test-code">L4</td>
                <td>OS Concepts</td>
                <td>Theoretical</td>
              </tr>
              <tr>
                <td className="lab-test-code">L5</td>
                <td>Cryptography</td>
                <td>Security</td>
              </tr>
            </tbody>
          </table>

          <div className="lab-warning-box">
            <div className="lab-warning-icon">⚠</div>
            <div className="lab-warning-text">
              <strong>Critical:</strong> Wrong final answer results in immediate disqualification
            </div>
          </div>
        </section>

        {/* TEST PHASE 2 */}
        <section className="lab-section">
          <div className="lab-phase-header">
            <div className="lab-phase-number lab-phase-number-alt">TEST PHASE 02</div>
            <div className="lab-phase-type">OFFLINE ASSESSMENT</div>
          </div>
          <h3 className="lab-phase-title">CREEL HOUSE</h3>
          
          <table className="lab-test-table">
            <thead>
              <tr>
                <th>Test Code</th>
                <th>Test Description</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="lab-test-code">M1</td>
                <td>System Logic</td>
                <td>Analytical</td>
              </tr>
              <tr>
                <td className="lab-test-code">M2</td>
                <td>Debugging</td>
                <td>Practical</td>
              </tr>
              <tr>
                <td className="lab-test-code">M3</td>
                <td>Decryption</td>
                <td>Security</td>
              </tr>
              <tr>
                <td className="lab-test-code">M4</td>
                <td>IT Decision Making</td>
                <td>Strategic</td>
              </tr>
            </tbody>
          </table>

          <div className="lab-warning-box">
            <div className="lab-warning-icon">⚠</div>
            <div className="lab-warning-text">
              <strong>Protocol:</strong> No external communication permitted during this phase
            </div>
          </div>
        </section>

        {/* SUCCESS CRITERIA */}
        <section className="lab-section">
          <h3 className="lab-section-title">SUCCESS CRITERIA</h3>
          <div className="lab-criteria-list">
            <div className="lab-criteria-item">
              <span className="lab-criteria-marker">✓</span>
              <span className="lab-criteria-text">First 3 teams qualify for escape protocol</span>
            </div>
            <div className="lab-criteria-item">
              <span className="lab-criteria-marker">✓</span>
              <span className="lab-criteria-text">Speed is critical factor in evaluation</span>
            </div>
            <div className="lab-criteria-item lab-criteria-critical">
              <span className="lab-criteria-marker">✕</span>
              <span className="lab-criteria-text">Failure leads to permanent containment</span>
            </div>
          </div>
        </section>

        {/* REGISTRATION */}
        <section className="lab-section lab-section-final">
          <h2 className="lab-section-title">REGISTRATION PROTOCOL</h2>
          <div className="lab-registration-grid">
            <a
              href="https://forms.gle/wJryyor81MBzcdjZA"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-reg-button"
            >
              <div className="lab-reg-button-label">REGISTER</div>
              <div className="lab-reg-button-sub">PCCOE STUDENTS</div>
            </a>

            <a
              href="https://forms.gle/Y3QAwyXbjC6xoRzFA"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-reg-button"
            >
              <div className="lab-reg-button-label">REGISTER</div>
              <div className="lab-reg-button-sub">NON-PCCOE STUDENTS</div>
            </a>

            <a
              href="https://drive.google.com/file/d/1LLa4Lm7zUfyssycWpwDgCSa_xiCUhwJT/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-reg-button lab-reg-button-secondary"
            >
              <div className="lab-reg-button-label">DOWNLOAD</div>
              <div className="lab-reg-button-sub">RULEBOOK</div>
            </a>

            <a
              href="https://chat.whatsapp.com/YOUR_ESCAPE_HAWKINS_GROUP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-reg-button lab-reg-button-whatsapp"
            >
              <div className="lab-reg-button-label">JOIN</div>
              <div className="lab-reg-button-sub">WHATSAPP GROUP</div>
            </a>
          </div>
          <div className="lab-footer-note">
            <em>This report is classified. Unauthorized access is prohibited.</em>
          </div>
        </section>

      </main>
    </div>
  );
}
