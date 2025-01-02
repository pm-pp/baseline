import { ComponentPropsWithoutRef } from "react";

export function Popover() {
  return (
    <section className="flex justify-center">
      {[Basic].map((Component, index) => (
        <Component key={index} />
      ))}
    </section>
  );
}

function Basic() {
  return (
    <>
      <Button>Basic</Button>

      <div
        id="popover"
        popover="auto"
        className="absolute right-0 left-0 m-auto min-w-64 flex-row-reverse items-start gap-2 rounded-lg bg-purple-600 p-4 text-xl font-medium text-white opacity-0 transition-all transition-discrete duration-300 open:opacity-100 starting:open:opacity-0"
      >
        <p>I am a popover with more information.</p>
      </div>
    </>
  );
}

function Button({ children, ...props }: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      popoverTarget="popover"
      className="rounded-sm border-2 border-purple-600 px-4 py-2 text-sm font-bold hover:not-[:disabled]:bg-purple-700 hover:not-[:disabled]:text-white disabled:bg-purple-300 disabled:text-purple-200"
      {...props}
    >
      {children}
    </button>
  );
}
