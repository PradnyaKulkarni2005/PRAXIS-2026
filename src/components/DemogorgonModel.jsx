export default function DemogorgonModel() {
  return (
    <model-viewer
      src={`${import.meta.env.BASE_URL}models/demogorgon.glb`}
      alt="Demogorgon 3D Model"
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
