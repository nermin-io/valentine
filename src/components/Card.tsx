import { HeartIcon } from "./icons/HeartIcon.tsx";
import { Button } from "./Button.tsx";

export function Card() {
  return (
    <div className="bg-pink-light w-[600px] h-[600px] border-8 p-8 border-offWhite flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl text-center">Will you be my valentine?</h1>
        <HeartIcon height={150} width={150} />
      </div>
      <div className="flex flex-row gap-2">
        <Button variant="primary">Yes</Button>
        <Button variant="secondary">No</Button>
      </div>
    </div>
  );
}
