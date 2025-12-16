import { GroupProps } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import { useState } from "react";

interface InfoPlanesProps extends GroupProps {}

export default function InfoPlanes(props: InfoPlanesProps) {
  const [showInfo, setShowInfo] = useState(false);

  const planes = [
    {
      title: "Warum Algen?",
      content: [
        "Wachsen sehr schnell",
        "Brauchen kaum Ackerland, Süßwasser oder Dünger",
        "Schonend für Umwelt und Klima",
      ],
    },
    {
      title: "Wichtige Inhaltsstoffe",
      content: [
        "Enthalten Eiweiß, Vitamine und Omega-3-Fettsäuren",
        "Liefern wichtige Nährstoffe für den Menschen",
      ],
    },
    {
      title: "Wachstumsbedingungen",
      content: ["Benötigen Licht, Wasser und Nährstoffe", "Können kontrolliert gezüchtet werden"],
    },
    {
      title: "Indoor-Kultivierung",
      content: [
        "Unabhängig von Wetter und Jahreszeiten",
        "Kein Ackerland notwendig",
        "Produktion fast überall möglich",
      ],
    },
    {
      title: "Grünalgen im Fokus",
      content: ["Ca. 25 % Eiweiß", "Gute pflanzliche Proteinquelle"],
    },
    {
      title: "Besondere Vitamine",
      content: [
        "Enthalten Beta-Carotin",
        "Vorstufe von Vitamin A",
        "Wichtig für Augen, Haut und Immunsystem",
      ],
    },
  ];

  return (
    <group {...props}>
      {/* INFO BUTTON (KUGEL) */}
      {!showInfo && (
        <group position={[0, 0, 0]}>
          <mesh onPointerDown={() => setShowInfo(true)}>
            <sphereGeometry args={[0.2, 32, 32]} /> {/* Kugel, größer */}
            <meshStandardMaterial color="#2B4E4C" />
          </mesh>

          {/* i Text auf der Kugel */}
          <Text
            position={[0, 0, 0.21]} // leicht vor der Kugel
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            i
          </Text>
        </group>
      )}

      {/* INFO PANELS */}
      {showInfo && (
        <group>
          {planes.map((plane, idx) => {
            const xOffset = (idx % 3) * 0.95 - 0.95; // 3 Spalten
            const yOffset = -Math.floor(idx / 3) * 1.5; // 2 Reihen
            return (
              <group key={idx} position={[xOffset, yOffset, 0]}>
                <RoundedBox args={[0.9, 1.1, 0.05]} radius={0.03}>
                  <meshStandardMaterial color="#2B4E4C" />
                </RoundedBox>

                {/* Titel fett */}
                <Text
                  position={[0, 0.45, 0.03]}
                  fontSize={0.08}
                  color="white"
                  anchorX="center"
                  anchorY="top"
                  maxWidth={0.85}
                  textAlign="center"
                  fontWeight="bold"
                >
                  {plane.title}
                </Text>

                {/* Inhalt zentriert */}
                <Text
                  position={[0, 0.15, 0.03]}
                  fontSize={0.05}
                  color="white"
                  anchorX="center"
                  anchorY="top"
                  maxWidth={0.8}
                  textAlign="center"
                  lineHeight={1.4}
                >
                  {plane.content.map((line) => `• ${line}`).join("\n")}
                </Text>
              </group>
            );
          })}

          {/* SCHLIESSEN BUTTON oben rechts */}
          <group position={[1.5, 0.6, 0]}>
            <RoundedBox
              args={[0.3, 0.3, 0.1]}
              radius={0.05}
              onPointerDown={() => setShowInfo(false)}
            >
              <meshStandardMaterial color="#E53935" />
            </RoundedBox>
            <Text
              position={[0, 0, 0.06]}
              fontSize={0.12}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              X
            </Text>
          </group>
        </group>
      )}
    </group>
  );
}