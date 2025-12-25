export default function VecnaModel() {
  return (
    <model-viewer
      src="/models/vecna_stranger_things_fan_art.glb"
      alt="Vecna 3D Model"
      camera-controls
      disable-zoom
      shadow-intensity="1"
      exposure="1.1"
      environment-image="neutral"
      style={{
        width: "100%",
        height: "520px",
        backgroundColor: "transparent",
      }}
    />
  );
}
