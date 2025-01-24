import { useRef } from 'react';
import { Button } from './Button';

export function Dialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <main className="mx-auto flex max-w-lg flex-col gap-8">
      <Button onClick={() => dialogRef.current?.showModal()}>
        Open dialog as a modal
      </Button>

      <dialog
        ref={dialogRef}
        className="h-full place-self-center overflow-hidden rounded-lg bg-white p-8 backdrop:backdrop-blur-xs"
      >
        <div className="divide flex h-full w-full max-w-lg flex-col gap-2">
          <div className="grow space-y-4 overflow-y-auto">
            {[...Array(10)].map((_, i) => (
              <p key={i} className="first:text-red-600 last:text-red-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                pulvinar lectus, at venenatis diam. Mauris volutpat dapibus
                scelerisque. Sed vestibulum tortor eget ultricies lacinia. Sed
                scelerisque lectus id sem vestibulum, nec varius mi consectetur.
                In vitae mi nibh. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            ))}
          </div>
          <p></p>
          <Button onClick={() => dialogRef.current?.close()}>
            Press <kbd>Escape (ESC)</kbd> key to exit or click here
          </Button>
        </div>
      </dialog>
    </main>
  );
}
