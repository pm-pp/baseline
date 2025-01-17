const formatDate = (value: Date, options?: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat(navigator.language, options).format(value);

const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat(navigator.language, options).format(value);

const formatNumberRange = (
  valueA: number,
  valueB: number,
  options?: Intl.NumberFormatOptions,
) =>
  new Intl.NumberFormat(navigator.language, options).formatRange(
    valueA,
    valueB,
  );

const formatTime = (
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  options?: Intl.RelativeTimeFormatOptions,
) =>
  new Intl.RelativeTimeFormat(
    navigator.language,
    options ?? {
      style: 'narrow',
    },
  ).format(value, unit);

const dateTimeFormats: Intl.DateTimeFormatOptions[] = [
  {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  },
  {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Australia/Sydney',
  },
  {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles',
  },
  { hour: 'numeric', dayPeriod: 'short' },
];

const numberFormats: Intl.NumberFormatOptions[] = [
  { notation: 'compact' },
  { notation: 'engineering' },
  { notation: 'scientific' },
  { notation: 'standard' },
  { style: 'currency', currency: 'EUR' },
  { style: 'unit', unit: 'liter' },
];

const relativeTimeFormats: [
  number,
  Intl.RelativeTimeFormatUnit,
  Intl.RelativeTimeFormatOptions,
][] = [
  [3, 'quarter', { style: 'long' }],
  [3, 'quarter', { style: 'short' }],
  [3, 'quarter', { style: 'narrow' }],
  [1, 'days', { style: 'long' }],
  [2, 'days', { style: 'short' }],
  [3, 'days', { style: 'narrow' }],
];

// const maximums: [number, Intl.RelativeTimeFormatUnit][] = [
//   [60, "seconds"],
//   [60, "minutes"],
//   [24, "hours"],
//   [7, "days"],
//   [4.34524, "weeks"],
//   [12, "months"],
//   [Number.POSITIVE_INFINITY, "years"],
// ];

// function formatTimeAgo(date: Date) {
//   let duration = (date.getTime() - Date.now()) / 1000;

//   const [, unit] = maximums.find(([amount]) => {
//     if (Math.abs(duration) < amount) {
//       return true;
//     }
//     duration /= amount;
//   })!;

//   return timeFormatter.format(Math.round(duration), unit);
// }

export function Internationalization() {
  const now = new Date();

  return (
    <main className="m-auto flex w-full max-w-lg flex-col gap-4 font-mono **:[h2]:text-xl **:[h2]:font-bold **:[p]:text-sm *:[section]:space-y-2 **:[time]:text-sm">
      <p className="my-4 font-sans">
        Maybe something interesting about each one of the internationalization
        constructors and other language sensitive functions.
      </p>
      <section>
        <h2>Intl.Collator</h2>
        <p>Z, a, z, ä</p>
        <p className="flex flex-col justify-between whitespace-pre">
          {['Z', 'a', 'z', 'ä']
            .sort(new Intl.Collator('de').compare)
            .join(', ')}
          <code>{`de`}</code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {['Z', 'a', 'z', 'ä']
            .sort(new Intl.Collator('sv').compare)
            .join(', ')}
          <code>{`sv`}</code>
        </p>
      </section>
      <section>
        <h2>Intl.DateTimeFormat</h2>
        <time dateTime={now.toUTCString()}>{now.toUTCString()}</time>
        {dateTimeFormats.map((options) => {
          const code = JSON.stringify(options, null, '\t');
          const ds = formatDate(now, options);

          return (
            <time
              key={code}
              dateTime={ds}
              className="flex flex-col justify-between whitespace-pre"
            >
              {ds}
              <code>{code}</code>
            </time>
          );
        })}
      </section>
      <section>
        <h2>Intl.DisplayNames</h2>
        <p className="flex flex-col justify-between whitespace-pre">
          {new Intl.DisplayNames('pt', { type: 'region' }).of('US')}
          <code>{`new Intl.DisplayNames('pt, { type: 'region' }).of('US')`}</code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {new Intl.DisplayNames('en', { type: 'language' }).of('en-GB')}
          <code>{`new Intl.DisplayNames('en', { type: 'language' }).of('en-GB')`}</code>
        </p>
      </section>
      <section>
        <h2>Intl.DurationFormat</h2>
      </section>
      <section>
        <h2>Intl.ListFormat</h2>
        <p className="flex flex-col justify-between whitespace-pre">
          {new Intl.ListFormat(navigator.language, {
            style: 'long',
            type: 'conjunction',
          }).format(['Motorcycle', 'Bus', 'Car'])}
          <code>{`{ style: 'short', type: 'disjunction' }`}</code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {new Intl.ListFormat(navigator.language, {
            style: 'short',
            type: 'disjunction',
          }).format(['Motorcycle', 'Bus', 'Car'])}
          <code>{`{ style: 'short', type: 'disjunction' }`}</code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {new Intl.ListFormat(navigator.language, {
            style: 'narrow',
            type: 'unit',
          }).format(['Motorcycle', 'Bus', 'Car'])}
          <code>{`{ style: 'narrow', type: 'unit' }`}</code>
        </p>
      </section>
      <section>
        <h2>Intl.Locale</h2>
      </section>
      <section>
        <h2>Intl.NumberFormat</h2>
        <p>76523678</p>
        <h3 className="font-bold">format()</h3>
        {numberFormats.map((options) => {
          const code = JSON.stringify(options, null, '\t');

          return (
            <p
              key={code}
              className="flex flex-col justify-between whitespace-pre"
            >
              {formatNumber(76523678, options)}
              <code>{code}</code>
            </p>
          );
        })}
        <h3 className="font-bold">formatRange()</h3>
        <p className="flex flex-col justify-between whitespace-pre">
          {formatNumberRange(2.9, 3.1, { style: 'currency', currency: 'EUR' })}
          <code>
            {JSON.stringify(
              {
                style: 'currency',
                currency: 'EUR',
              },
              null,
              '\t',
            )}
          </code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {formatNumberRange(2.9, 3.1, {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0,
          })}
          <code>
            {JSON.stringify(
              {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              },
              null,
              '\t',
            )}
          </code>
        </p>
      </section>
      <section>
        <h2>Intl.PluralRules</h2>
        {[
          [
            new Intl.PluralRules('ar-EG').select(0),
            'new Intl.PluralRules("ar-EG").select(0)',
          ],
          [
            new Intl.PluralRules('ar-EG').select(5),
            'new Intl.PluralRules("ar-EG").select(5)',
          ],
          [
            new Intl.PluralRules('ar-EG').select(55),
            'new Intl.PluralRules("ar-EG").select(55)',
          ],
          [
            new Intl.PluralRules('uk')
              .resolvedOptions()
              .pluralCategories.join(', '),
            'new Intl.PluralRules("uk").resolvedOptions().pluralCategories',
          ],
          [
            new Intl.PluralRules('pt')
              .resolvedOptions()
              .pluralCategories.join(', '),
            'new Intl.PluralRules("pt").resolvedOptions().pluralCategories',
          ],
        ].map(([value, expression]) => (
          <p
            key={expression as string}
            className="flex flex-col justify-between whitespace-break-spaces"
          >
            {value}
            <code>{expression}</code>
          </p>
        ))}
      </section>
      <section>
        <h2>Intl.RelativeTimeFormat</h2>
        {relativeTimeFormats.map(([value, unit, options]) => {
          const code = JSON.stringify(options);
          const time = formatTime(value, unit, options);

          return (
            <time
              key={time}
              dateTime={time}
              className="flex flex-col justify-between whitespace-pre"
            >
              {time}
              <code>
                {unit} | {code}
              </code>
            </time>
          );
        })}
      </section>
      <section>
        <h2>Intl.Segmenter</h2>
      </section>
    </main>
  );
}
