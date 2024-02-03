import { useState } from "react";
import { Question } from "./Question.tsx";
import { SuccessMessage } from "./SuccessMessage.tsx";

export function Card() {
  const [success, setSuccess] = useState(false);

  const onSuccess = async () => {
    setSuccess(true);
    await new Audio("/success.mp3").play();
  };

  return (
    <div className="bg-pink-light w-[600px] h-[600px] border-8 p-8 border-offWhite flex flex-col items-center justify-between">
      {success ? <SuccessMessage /> : <Question onSuccess={onSuccess} />}
    </div>
  );
}
