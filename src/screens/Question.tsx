import { Button } from "@/components/button";
import type { ValentineResponse } from "@/types";

type QuestionProps = {
  onResponse: (r: ValentineResponse) => void;
};

export function Question({ onResponse }: QuestionProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="md:text-7xl text-5xl font-medium">
          Leah, will you be my Valentine?
        </h1>
        <p className="text-lg">— BDB</p>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="primary" onClick={() => onResponse("yes")}>
          Abso-fucking-lutely
        </Button>
        <Button variant="secondary" onClick={() => onResponse("no")}>
          Brother Eww
        </Button>
      </div>
    </>
  );
}
