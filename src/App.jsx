import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bgmi from "./bgmi/Bgmi";
import Mindscape from "./mindscape/Mindscape";
import EscapeHawkins from "./escapehawkins/HawkinsRoute";
import CodeUpsideDown from "./codeUpsideDown/CodeUpsideDown";
import VecnaVerse from "./vecnaverse/VecnaVerse";
import AudioButton from "./components/AudioButton";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mindscape" element={<Mindscape />} />
        <Route path="/bgmi" element={<Bgmi />} />
        <Route path="/escape-hawkins" element={<EscapeHawkins />} />
        <Route path="/code-upside-down" element={<CodeUpsideDown />} />
        <Route path="/vecnaverse" element={<VecnaVerse />} />
      </Routes>

      {/* Global Audio Toggle Button */}
      <AudioButton />
    </>
  );
}
