import { useEffect, useState } from "react";
import { quizLocations } from "../data/locations";
import { distanceInMeters } from "../utility/geo";
import QuizOverlay from "../components-ui/quizOverlay";

interface LocationGateProps {
  active: boolean;
  onClose: () => void;
}

const quizzes = (import.meta as any).glob("../data/*.json");

export default function LocationGate({ active, onClose }: LocationGateProps) {

  const [quizData, setQuizData] = useState<any[] | null>(null);
  const [message, setMessage] = useState("Standort wird geprüft...");
  const [ready, setReady] = useState(false); 

  useEffect(() => {
    if (!active) return;

    setQuizData(null);
    setReady(false);
    setMessage("Standort wird geprüft...");

    navigator.geolocation.getCurrentPosition(async (pos) => {

      const { latitude, longitude } = pos.coords;

      const found = quizLocations.find((loc) => {
        const dist = distanceInMeters(latitude, longitude, loc.coords.lat, loc.coords.lon);
        return dist < loc.radius;
      });

      if (!found) {
        setMessage("❌ Kein Quiz in deiner Nähe");
        return;
      }

      const quizPath = `../data/${found.quizFile}`;
      const loader = quizzes[quizPath];

      if (!loader) {
        setMessage("❌ Quizdatei fehlt");
        return;
      }

      const data = await loader();
      setQuizData(data.default);
      setReady(true);
      setMessage("✅ Quiz gefunden!");

    }, () => setMessage("🚫 Standort blockiert"));
  }, [active]);

  if (!active) return null;

  return (
    <QuizOverlay
      questions={quizData || []}
      isVisible={ready}
      onClose={onClose}
    />
  );
}