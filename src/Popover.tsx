import { MouseEventHandler, useRef, useState } from 'react';
import { Button } from './Button';
import { cn } from './cn';

/**
 * The `popover=auto` enables light-dismiss behavior and automatically closes other popovers.
 * Use `popover=manual` when a close button is available. Manual popovers don't close other popovers or allow users to dismiss the popover by clicking away in the UI.
 */
export function Popover() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col justify-center gap-8">
      {[Basic, Backdrop, Multiple, Nested, Toast].map((Component, index) => (
        <Component key={`component-${index}`} />
      ))}
    </main>
  );
}

function Basic() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Basic declarative popover</h2>

      <p>Demonstrates a basic auto state popover</p>

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
        className="fixed top-12 right-0 left-0 mx-auto min-w-64 items-start gap-2 rounded-lg bg-purple-600 p-4 text-xl font-medium text-white opacity-0 transition-all transition-discrete duration-300 open:opacity-100 starting:open:opacity-0"
      >
        <p>I am a basic popover with more information.</p>
      </div>
    </div>
  );
}

function Backdrop() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Blur background popover</h2>

      <p>
        Shows how to add styling to the content behind the popover using the
        <em>::backdrop</em> pseudo-element.
      </p>

      <Button popoverTarget="backdrop">Open popover</Button>

      <div
        id="backdrop"
        popover="auto"
        className="fixed right-0 left-0 m-auto min-w-64 rounded-lg bg-purple-600 p-4 text-xl font-medium text-white opacity-0 transition-all transition-discrete duration-300 backdrop:backdrop-blur-xs open:opacity-100 starting:open:opacity-0"
      >
        <h3 className="text-2xl font-bold">Popover heading</h3>
        <p className="mt-4">
          This here is some very important content that we want to draw your
          attention to before you light dismiss it. Read it all, do not delay!
        </p>
      </div>
    </div>
  );
}

function Multiple() {
  type PopoverAttribute = 'auto' | 'manual';

  const [popover, setPopover] = useState<PopoverAttribute>('auto');

  return (
    <div className="relative flex flex-col gap-2">
      <h2 className="text-xl font-bold">Multiple auto popovers</h2>

      <p>
        Demonstrates that, generally, only one <em>auto</em> popover can be
        displayed at once. Also demonstrates that multiple <em>manual</em>{' '}
        popovers can be displayed at once, but they can't be light-dismissed.
      </p>

      <fieldset className="flex gap-2">
        <input
          type="radio"
          id="auto"
          name="auto"
          value="auto"
          checked={popover === 'auto'}
          onChange={() => setPopover('auto')}
        />
        <label htmlFor="auto">auto</label>
        <input
          type="radio"
          id="manual"
          name="manual"
          value="manual"
          checked={popover === 'manual'}
          onChange={() => setPopover('manual')}
        />
        <label htmlFor="manual">manual</label>
      </fieldset>

      <div className="flex flex-col gap-2">
        {['1', '2'].map((id) => {
          const target = `popover-${id}`;
          return (
            <div key={`multiple-${target}`} className="flex w-full gap-1">
              <Button popoverTarget={target} popoverTargetAction="show">
                Show popover #{id}
              </Button>

              {popover === 'manual' && (
                <Button popoverTarget={target} popoverTargetAction="hide">
                  Hide popover #{id}
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {['1', '2'].map((id) => (
        <div
          key={`popover-${id}`}
          id={`popover-${id}`}
          popover={popover}
          className="fixed top-10 mx-auto rounded-lg bg-purple-600 p-4 text-xl font-medium text-white"
        >
          Popover content #{id}
        </div>
      ))}
    </div>
  );
}

function Nested() {
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const submenuContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Nested popover menu</h2>

      <p>Demonstrates the behavior of nested auto state popovers.</p>

      <Button
        popoverTarget="mainpopover"
        popoverTargetAction="toggle"
        className="[anchor-name:--menu-anchor]"
      >
        Menu
      </Button>

      <div
        ref={menuRef}
        id="mainpopover"
        popover="auto"
        className="fixed rounded-lg border-2 border-white bg-purple-600 p-1 text-xl font-medium text-white [position-anchor:--menu-anchor] [position-area:top]"
        onClick={() => {
          menuRef.current?.hidePopover();
          submenuRef.current?.hidePopover();
        }}
      >
        <nav className="flex flex-col decoration-2 underline-offset-4 **:[a]:p-2 **:hover:[a]:underline">
          <a href="#">Home</a>
          <div
            ref={submenuContainerRef}
            className="flex flex-col [anchor-name:--submenu-anchor]"
            tabIndex={0}
            onFocus={() => submenuRef.current?.showPopover()}
            onMouseOver={() => submenuRef.current?.showPopover()}
            onMouseOut={() => submenuRef.current?.hidePopover()}
          >
            <a href="#">Pizza ➡</a>
            <div
              ref={submenuRef}
              id="subpopover"
              popover="auto"
              className="fixed rounded-lg border-2 border-white bg-purple-600 p-1 text-xl font-medium text-white [position-anchor:--submenu-anchor] [position-area:right]"
              onClick={() => {
                menuRef.current?.hidePopover();
                submenuRef.current?.hidePopover();
              }}
            >
              <div className="flex flex-col decoration-2 underline-offset-4">
                <a href="#">Margherita</a>
                <a href="#">Pepperoni</a>
                <a href="#">Ham &amp; Shroom</a>
                <a href="#">Vegan</a>
              </div>
            </div>
          </div>
          <a href="#">Music</a>
          <a href="#">Wombats</a>
          <a href="#">Finland</a>
        </nav>
      </div>
    </div>
  );
}

function Toast() {
  interface ToastType {
    id: ReturnType<typeof crypto.randomUUID>;
    type: 'success' | 'fail';
    message: string;
  }
  const toastContainerRef = useRef<HTMLUListElement>(null);
  const [toasts, setToasts] = useState<Array<ToastType>>([]);
  const successCount = toasts.filter(({ type }) => type === 'success').length;
  const failCount = toasts.filter(({ type }) => type === 'fail').length;
  const handleGenerate =
    (type: ToastType['type']): MouseEventHandler<HTMLButtonElement> =>
    () => {
      const toast = {
        id: crypto.randomUUID(),
        type,
        message:
          type === 'success' ? 'Action was successful!' : 'Action failed!',
      };

      const modifiedToasts = [...toasts, toast];

      setToasts(modifiedToasts);

      if (modifiedToasts.length > 0) {
        toastContainerRef.current?.showPopover();
      } else {
        toastContainerRef.current?.hidePopover();
      }

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 4000);
    };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Toast popovers</h2>

      <p>
        Illustrates how to make a simple system of "toast" notifications with
        popovers, which automatically hide again after a certain time.
      </p>

      <div className="flex gap-2">
        <Button onClick={handleGenerate('success')}>
          Generate success toast
        </Button>

        <Button onClick={handleGenerate('fail')}>Generate fail toast</Button>
      </div>

      <p>
        Successes: {successCount} | Failures: {failCount}
      </p>

      <ul
        ref={toastContainerRef}
        popover="manual"
        className="fixed top-0 right-0 flex flex-col-reverse gap-2 p-2"
      >
        {toasts.map(({ id, type, message }, index) => (
          <li
            key={`toast-${id}`}
            className={cn(
              'rounded-lg p-2 font-medium text-white',
              type === 'success' && 'bg-green-600',
              type === 'fail' && 'bg-red-600',
            )}
          >
            {`#${index} ${message}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
