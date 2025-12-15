import React, { useEffect, useState } from "react";

type Props = {
  lines: string[];
  characterImageSrc?: string;
  isVisible?: boolean;
  onFinished?: () => void;
};

const CharacterOverlay: React.FC<Props> = ({
  lines,
  characterImageSrc,
  isVisible = true,
  onFinished,
}) => {
  const [dialogIndex, setDialogIndex] = useState(0);

  // Reset when lines change (location swap)
  useEffect(() => {
    setDialogIndex(0);
  }, [lines]);

  if (!isVisible || !lines?.length) return null;

  const canPrev = dialogIndex > 0;
  const isLastLine = dialogIndex >= lines.length - 1;
  const canNext = !isLastLine || !!onFinished;

  const goNext = () => {
    if (isLastLine) {
      onFinished?.();
      return;
    }
    setDialogIndex((i) => Math.min(lines.length - 1, i + 1));
  };

  return (
    <div className="character-overlay">
      {characterImageSrc && (
        <img
          src={characterImageSrc}
          alt="Campus Guide"
          className="character-image"
        />
      )}

      <div className="speech-bubble">
        <div className="speech-bubble__text">{lines[dialogIndex]}</div>

        <div className="bubble-nav">
          <button
            type="button"
            className="bubble-btn prev"
            onClick={() => setDialogIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            aria-label="Vorherige Nachricht"
          >
            ◀
          </button>
          <button
            type="button"
            className="bubble-btn next"
            onClick={goNext}
            disabled={!canNext}
            aria-label="Nächste Nachricht"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterOverlay;
