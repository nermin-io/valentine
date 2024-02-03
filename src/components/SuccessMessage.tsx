import { HeartIcon } from "./icons/HeartIcon.tsx";

export function SuccessMessage() {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-5xl text-center">
          Happy Valentine's <span className="text-pink-dark">_</span>ay
        </h1>
        <HeartIcon height={200} width={200} />
      </div>
      <p className="text-4xl text-center">
        You'll get the <span className="text-pink-dark">D</span> later.
      </p>
    </>
  );
}
