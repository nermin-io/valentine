import { useState } from "react";
import { Question } from "./Question.tsx";
import { SuccessMessage } from "./SuccessMessage.tsx";

export function Card() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="bg-pink-light w-[600px] h-[600px] border-8 p-8 border-offWhite flex flex-col items-center justify-between">
      {success ? (
        <SuccessMessage />
      ) : (
        <Question onSuccess={() => setSuccess(true)} />
      )}
    </div>
  );
}
