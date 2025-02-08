import { ValentineForm } from "@/screens/ValentineForm.tsx";

export default function App() {
  return (
    <div className="h-screen w-screen p-4">
      <div className="bg-pink-lightest text-pink-darkest h-full w-full rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full text-center gap-12 container">
          <ValentineForm />
        </div>
      </div>
    </div>
  );
}
