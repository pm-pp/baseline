import { useState } from "react";
import { Accordion } from "./Accordion";

const features = [
  { title: "Exclusive accordion", content: <Accordion /> },
  { title: "Popover API", content: <>Popover API</> },
];

function App() {
  const [feature, setFeature] = useState(features[0]);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-8 p-4">
      <header className="flex w-full flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold">Baseline 2023, 2024 & beyond</h1>
        <nav className="flex justify-center divide-x text-lg">
          {features.map((f) => (
            <button
              key={f.title}
              className="px-4 underline-offset-4 hover:underline data-[selected=true]:underline"
              data-selected={f.title === feature.title}
              onClick={() => setFeature(f)}
            >
              {f.title}
            </button>
          ))}
        </nav>
      </header>
      <main className="w-full">{feature.content}</main>
    </div>
  );
}

export { App };
