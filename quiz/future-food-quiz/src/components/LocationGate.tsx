import { useEffect, useState } from "react";
import { quizLocations } from "../data/locations";
import { distanceInMeters } from "../utils/geo";
import Quiz from "./Quiz";

// ✅ Alle Quizdateien automatisch laden (VITE Richtlinie)
const quizzes = import.meta.glob("../data/*.json");

export default function LocationGate() {
  const [quizData, setQuizData] = useState<any[] | null>(null);
  const [message, setMessage] = useState("Standort wird geprüft...");

  useEffect(() => {
    console.log("📍 Standortprüfung gestartet");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log("📌 Position:", latitude, longitude);

        const found = quizLocations.find((loc) => {
          const dist = distanceInMeters(
            latitude,
            longitude,
            loc.coords.lat,
            loc.coords.lon
          );
          console.log("🔎", loc.name, "→", Math.round(dist), "m");
          return dist < loc.radius;
        });

        if (!found) {
          setMessage("❌ Du bist nicht an einem Quiz-Standort.");
          return;
        }

        console.log("✅ Standort erkannt:", found.name);
        setMessage(`✅ Standort erkannt: ${found.name}`);

        const quizPath = `../data/${found.quizFile}`;
        const loadQuiz = quizzes[quizPath];

        if (!loadQuiz) {
          console.error("❌ Quizdatei nicht gefunden:", quizPath);
          setMessage("❌ Quizdatei fehlt!");
          return;
        }

        const quizModule: any = await loadQuiz();
        console.log("📘 Quiz geladen:", quizModule.default);
        setQuizData(quizModule.default);
      },
      (error) => {
        console.error("🚫 GPS Fehler:", error);
        setMessage("🚫 Standortzugriff blockiert oder nicht erlaubt.");
      }
    );
  }, []);

  if (!quizData)
    return (
      <div style={{ color: "white", textAlign: "center" }}>
        <h2>{message}</h2>
        <p>Falls nichts passiert: Debug-Konsole öffnen (F12)</p>
      </div>
    );

  return <Quiz questions={quizData} />;
}


/*
// testen hat geklappt 
export default function LocationGate() {
  return (
    <div style={{ background: "blue", padding: "30px", color: "white" }}>
      ✅ LocationGate rendert!
    </div>
  );
} */