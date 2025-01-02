import { ComponentPropsWithoutRef } from "react";

/**
 * The `popover=auto` enables light-dismiss behavior and automatically closes other popovers.
 * Use `popover=manual` when a close button is available. Manual popovers don't close other popovers or allow users to dismiss the popover by clicking away in the UI.
 */
export function Popover() {
  return (
    <section className="mx-auto flex w-full max-w-sm flex-col justify-center gap-8">
      {[Basic, Backdrop, Multiple].map((Component, index) => (
        <Component key={index} />
      ))}
    </section>
  );
}

function Basic() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-xl font-bold">
        Basic declarative popover
      </h2>

      <p className="text-center">Demonstrates a basic auto state popover</p>

      <div className="flex gap-2">
        <Button popoverTarget="basic" popoverTargetAction="show">
          Open popover
        </Button>

        <Button popoverTarget="basic" popoverTargetAction="hide">
          Hide popover
        </Button>
      </div>

      <div
        id="basic"
        popover="auto"
        className="absolute top-12 right-0 left-0 mx-auto min-w-64 items-start gap-2 rounded-lg bg-purple-600 p-4 text-xl font-medium text-white opacity-0 transition-all transition-discrete duration-300 open:opacity-100 starting:open:opacity-0"
      >
        <p>I am a basic popover with more information.</p>
      </div>
    </div>
  );
}

function Backdrop() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center text-xl font-bold">Blur background popover</h2>

      <p className="text-center">
        Shows how to add styling to the content behind the popover using the
        <em>::backdrop</em> pseudo-element.
      </p>

      <Button popoverTarget="backdrop">Open popover</Button>

      <div
        id="backdrop"
        popover="auto"
        className="absolute right-0 left-0 m-auto min-w-64 items-start gap-2 rounded-lg bg-purple-600 p-4 text-xl font-medium text-white opacity-0 transition-all transition-discrete duration-300 backdrop:backdrop-blur-xs open:opacity-100 starting:open:opacity-0"
      >
        <h3 className="text-2xl font-bold">Popover heading</h3>
        <p>
          This here is some very important content that we want to draw your
          attention to before you light dismiss it. Read it all, do not delay!
        </p>
      </div>
    </div>
  );
}

function Multiple() {
  return (
    <div className="relative flex flex-col gap-2">
      <h2 className="text-center text-xl font-bold">Multiple auto popovers</h2>

      <p className="text-center">
        Demonstrates that, generally, only one auto popover can be displayed at
        once.
      </p>

      <div className="flex gap-2">
        {["1", "2"].map((id) => (
          <Button
            key={`multiple-popover-${id}`}
            popoverTarget={`popover-${id}`}
          >
            Show popover #{id}
          </Button>
        ))}
      </div>

      {["1", "2"].map((id) => (
        <div
          id={`popover-${id}`}
          popover="auto"
          className="absolute top-10 mx-auto rounded-lg bg-purple-600 p-4 text-xl font-medium text-white"
        >
          Popover content #{id}
        </div>
      ))}
    </div>
  );
}

function Button({ children, ...props }: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      popoverTarget="popover"
      className="w-full rounded-sm border-2 border-purple-600 px-4 py-2 text-sm font-bold hover:not-[:disabled]:bg-purple-700 hover:not-[:disabled]:text-white disabled:bg-purple-300 disabled:text-purple-200"
      {...props}
    >
      {children}
    </button>
  );
}
