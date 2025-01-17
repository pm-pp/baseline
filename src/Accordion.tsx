import { useState } from 'react';

const items = [
  [
    'Welcome to Learn CSS!',
    'An evergreen CSS course and reference to level up your web styling expertise.',
  ],
  [
    'Box Model',
    'Everything displayed by CSS is a box. Understanding how the CSS Box Model works is therefore a core foundation of CSS.',
  ],
  [
    'Selectors',
    'To apply CSS to an element you need to select it. CSS provides you with a number of different ways to do this, and you can explore them in this module.',
  ],
  [
    '...',
    '(chapters 4 to 30 of this course have been omitted for demonstation purposes)',
  ],
];

export function Accordion() {
  const [isExclusive, setIsExclusive] = useState(true);

  return (
    <main className="m-auto flex w-full max-w-lg flex-col gap-2">
      <label className="flex items-center gap-2 text-lg">
        Exclusive?
        <input
          type="checkbox"
          name="exclusive"
          checked={isExclusive}
          onChange={(event) => setIsExclusive(event.currentTarget.checked)}
        />
      </label>
      <div className="divide-y-4 rounded-xl border-4 border-violet-800 **:border-violet-800">
        {items.map(([summary, description], index) => (
          <details
            key={summary}
            name={isExclusive ? 'exclusive-accordion' : undefined}
            className="group border-violet-800"
          >
            <summary className="bg-gray-400 p-2.5 text-xl group-first:rounded-t-lg group-last:rounded-b-lg group-open:border-b-4 group-open:group-last:!rounded-b-none">
              <div className="inline-flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-[50%] bg-violet-800 text-center font-bold text-white">
                  {index + 1}
                </div>
                <div className="font-medium underline decoration-violet-800 decoration-wavy decoration-2 group-open:decoration-emerald-300">
                  {summary}
                </div>
              </div>
            </summary>
            <p className="p-4">{description}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
