import { useNavigate } from "react-router-dom";

export default function Mindscape() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        padding: "3rem",
      }}
    >
      <button onClick={() => navigate("/")}>← Back</button>

      <h1 style={{ marginTop: "2rem" }}>MINDSCAPE</h1>
      <p>
        A high-stakes tech showdown where only the sharpest minds survive.
      </p>
    </div>
  );
}
