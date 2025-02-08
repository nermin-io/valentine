import { useState } from "react";
import { Question } from "@/screens/Question";
import { NoResponse } from "@/screens/NoResponse";
import { YesResponse } from "@/screens/YesResponse";
import { BookingForm } from "@/screens/BookingForm";
import type { ValentineResponse } from "@/types";

const ewwBrother = new Audio("/sounds/eww.mp3");
const sax = new Audio("/sounds/sax.mp3");

export function ValentineForm() {
  const [response, setResponse] = useState<ValentineResponse>("pending");
  const [getStarted, setGetStarted] = useState<boolean>(false);

  const handleResponse = async (r: ValentineResponse) => {
    setResponse(r);
    if (r === "no") {
      await ewwBrother.play();
    }

    if (r === "yes") {
      await sax.play();
    }
  };

  const handleReset = () => {
    ewwBrother.pause();
    setResponse("pending");
  };

  if (getStarted) {
    return <BookingForm />;
  }

  switch (response) {
    case "pending":
      return <Question onResponse={handleResponse} />;
    case "no":
      return <NoResponse onReset={handleReset} />;
    case "yes":
      return <YesResponse onGetStarted={() => setGetStarted(true)} />;
  }
}
