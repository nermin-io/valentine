import { Button } from "@/components/button";

type NoResponseProps = {
  onReset: () => void;
};

export function NoResponse({ onReset }: NoResponseProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="md:text-7xl text-5xl font-medium">
          I can't believe you've done this
        </h1>
        <p className="text-lg">:(</p>
      </div>
      <div className="flex flex-row gap-3">
        <Button variant="primary" onClick={onReset}>
          Another chance? 👉👈
        </Button>
      </div>
    </>
  );
}
