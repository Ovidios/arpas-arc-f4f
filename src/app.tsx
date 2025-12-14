import { XR, IfInSessionMode, createXRStore } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import QuizPlane from "./components/QuizPlane";

import IndexPage from "./pages/index";
import { quizLocations } from "./data/locations";
import { distanceInMeters } from "./utility/geo";

import { SceneData } from "./types/objectData";
import { TopicData } from "./types/topicData";
import { ContentTypesData } from "./types/contentTypesData";

const store = createXRStore({
  controller: false,
  sessionInit: {
    requiredFeatures: ["hit-test"],
  },
});

/* Quiz loader */
const quizzes = (import.meta as any).glob("./data/*.json");

interface AppProps {
  buttonClassName?: string;
  buttonText?: string | JSX.Element;
  view3dButtonText?: string | JSX.Element;
  content_types: ContentTypesData;
  scene: SceneData;
  topic: TopicData;
}

export default function App({
  buttonClassName = "start-button",
  buttonText = "Enter AR",
  view3dButtonText = "View in 3D",
  content_types,
  scene,
  topic,
}: AppProps) {
  const [inAR, setInAR] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizData, setQuizData] = useState<any[] | null>(null);
  const [canStartQuiz, setCanStartQuiz] = useState(false);


  /* ENTER AR                                           */
  
  const handleEnterAR = async () => {
    await store.enterAR();
    setInAR(true);
  };

 
  /* LOCATION + QUIZ LOAD                               */
 
  useEffect(() => {
    if (!inAR) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const found = quizLocations.find((loc) => {
        const dist = distanceInMeters(
          latitude,
          longitude,
          loc.coords.lat,
          loc.coords.lon
        );
        return dist < loc.radius;
      });

      if (!found) return;

      const quizPath = `./data/${found.quizFile}`;
      const loader = quizzes[quizPath];
      if (!loader) return;

      const data = await loader();
      setQuizData(data.default);
      setCanStartQuiz(true);
    });
  }, [inAR]);

  return (
    <>
      {/* START UI */}
      {!inAR && (
        <div className="button-group">
          <button className={buttonClassName} onClick={handleEnterAR}>
            {buttonText}
          </button>
          <button className={buttonClassName}>{view3dButtonText}</button>
        </div>
      )}

      {/* AR */}
      <Canvas style={{ width: "100%", height: "100%" }}>
        <XR store={store}>
          <IfInSessionMode allow="immersive-ar">
            <IndexPage
              contentTypes={content_types}
              sceneData={scene}
              topicData={topic}
            />

            {/* AR Quiz-Button */}
            {canStartQuiz && !showQuiz && (
              <group position={[0, 1, -1.2]}>
                <mesh onPointerDown={() => setShowQuiz(true)}>
                  <boxGeometry args={[0.65, 0.28, 0.1]} />
                  <meshStandardMaterial color="#187852" />
                </mesh>
                <Text
                  position={[0, 0, 0.09]}
                  fontSize={0.07}
                  color="black"
                  anchorX="center"
                  anchorY="middle"
                >
                  Quiz starten
                </Text>
              </group>
            )}

            {/* QuizPlane direkt in AR */}
            {showQuiz && quizData && (
              <QuizPlane
                questions={quizData}
                onClose={() => setShowQuiz(false)}
                position={[0, 1, -1]} // z.B. vor dem Nutzer
              />
            )}
          </IfInSessionMode>
        </XR>
      </Canvas>
    </>
  );
}