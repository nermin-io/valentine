import { HeartIcon } from "./icons/HeartIcon.tsx";
import { Button } from "./Button.tsx";
import { useState } from "react";

const responses = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again",
  "Last chance",
  "Surely not?",
  "You might regret this",
  "Give it another thought",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart :(",
];

interface QuestionProps {
  onSuccess: () => void;
}

export function Question({ onSuccess }: QuestionProps) {
  const [clickCount, setClickCount] = useState(0);

  const response = responses[Math.min(clickCount, responses.length - 1)];
  const scale = Math.min(1 + clickCount / 10, 3);

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl text-center">
          Leah, will you be my valentine?
        </h1>
        <HeartIcon height={150} width={150} />
      </div>
      <div className="flex flex-row gap-4">
        <Button
          variant="primary"
          style={{ transform: `scale(${scale})` }}
          onClick={onSuccess}
        >
          Yes
        </Button>
        <Button
          variant="secondary"
          onClick={() => setClickCount(clickCount + 1)}
        >
          {response}
        </Button>
      </div>
    </>
  );
}
