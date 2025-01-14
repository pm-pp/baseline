import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { Accordion } from "./Accordion";
import { Popover } from "./Popover";
import { AnchorPositioning } from "./AnchorPositioning";
import { Button } from "./Button";
import { cn } from "./cn";
import { ScrollDrivenAnimation } from "./ScrollDrivenAnimation";
import { FullBleedLayout } from "./FullBleedLayout";

const features = [
  { title: "Exclusive accordion", content: <Accordion /> },
  { title: "Popover API", content: <Popover /> },
  { title: "CSS Anchor Positioning", content: <AnchorPositioning /> },
  { title: "Scroll-driven Animations", content: <ScrollDrivenAnimation /> },
  { title: "Full-bleed layout", content: <FullBleedLayout /> },
];

type Feature = (typeof features)[0];

function Nav({
  feature,
  onClickFeature,
  className,
  ...props
}: ComponentPropsWithoutRef<"nav"> & {
  onClickFeature: (f: Feature) => void;
  feature: Feature;
}) {
  return (
    <nav
      {...props}
      className={cn(
        "flex flex-col flex-wrap justify-center gap-2 text-2xl font-medium",
        className,
      )}
    >
      {features.map((f) => (
        <button
          key={f.title}
          className="px-4 decoration-emerald-400 decoration-wavy decoration-2 underline-offset-8 hover:underline data-[selected=true]:underline"
          data-selected={f.title === feature.title}
          onClick={() => onClickFeature(f)}
        >
          {f.title}
        </button>
      ))}
    </nav>
  );
}

function App() {
  const navRef = useRef<HTMLDivElement>(null);
  const [feature, setFeature] = useState(features[0]);

  return (
    <div className="flex h-full w-full flex-col items-center gap-8 p-4">
      <header className="flex w-full flex-col gap-4 text-center">
        <div className="flex items-start gap-4">
          <Button
            className="w-fit p-1 text-violet-600 md:hidden"
            popoverTarget="nav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <h1 className="grow text-3xl font-bold">Baseline & beyond</h1>
        </div>

        <div
          ref={navRef}
          id="nav"
          popover="auto"
          className="h-full bg-white backdrop:backdrop-blur-xs"
        >
          <Nav
            feature={feature}
            onClickFeature={(f) => {
              setFeature(f);
              navRef.current?.hidePopover();
            }}
            className="items-start gap-4 py-4"
          />
        </div>

        <Nav
          feature={feature}
          onClickFeature={setFeature}
          className="hidden md:flex md:flex-row"
        />
      </header>

      <main className="w-full">{feature.content}</main>
    </div>
  );
}

export { App };
