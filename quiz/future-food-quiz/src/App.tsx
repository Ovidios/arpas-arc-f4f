import LocationGate from "./components/LocationGate";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#ffffff",
      color: "#111111",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1>Future Food Quiz</h1>
      <LocationGate />
    </div>
  );
}