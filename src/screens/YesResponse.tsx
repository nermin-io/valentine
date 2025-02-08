import { Button } from "@/components/button";

type YesResponseProps = {
  onGetStarted: () => void;
};

export function YesResponse({ onGetStarted }: YesResponseProps) {
  return (
    <>
      <img src="/images/blackguy.jpeg" alt="blackguy" width={250} />
      <div className="flex flex-col gap-2">
        <h1 className="md:text-7xl text-5xl font-medium">
          Habibi, prepare for a good time...
        </h1>
        <p className="text-lg">haha just kidding.... unless..?</p>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="primary" onClick={onGetStarted}>
          Get Started
        </Button>
      </div>
    </>
  );
}
