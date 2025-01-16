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

const timeFormatter = new Intl.RelativeTimeFormat(navigator.language, {
  style: "narrow",
});

const maximums: [number, Intl.RelativeTimeFormatUnit][] = [
  [60, "seconds"],
  [60, "minutes"],
  [24, "hours"],
  [7, "days"],
  [4.34524, "weeks"],
  [12, "months"],
  [Number.POSITIVE_INFINITY, "years"],
];

function formatTimeAgo(date: Date) {
  let duration = (date.getTime() - Date.now()) / 1000;

  const [, unit] = maximums.find(([amount]) => {
    if (Math.abs(duration) < amount) {
      return true;
    }
    duration /= amount;
  })!;

  return timeFormatter.format(Math.round(duration), unit);
}

export function Internationalization() {
  const date = new Date();
  return (
    <main className="m-auto flex w-full max-w-lg flex-col gap-4 font-mono **:[code]:text-xs **:[h2]:text-xl **:[h2]:font-bold **:[p]:text-sm *:[section]:space-y-2 **:[time]:text-sm">
      <p className="my-4 font-sans">
        Maybe something interesting about each one of the internationalization
        constructors and other language sensitive functions.
      </p>
      <section>
        <h2>Intl.Collator</h2>
      </section>
      <section>
        <h2>Intl.DateTimeFormat</h2>
        <time dateTime={date.toUTCString()}>{date.toUTCString()}</time>
        {(
          [
            {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            },
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            },
            {
              dateStyle: "full",
              timeStyle: "long",
              timeZone: "Australia/Sydney",
            },
            {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
              timeZone: "America/Los_Angeles",
            },
            { hour: "numeric", dayPeriod: "short" },
          ] as Intl.DateTimeFormatOptions[]
        ).map((options) => {
          const code = JSON.stringify(options, null, "\t");
          const ds = formatDate(date, options);

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
      </section>
      <section>
        <h2>Intl.DurationFormat</h2>
      </section>
      <section>
        <h2>Intl.ListFormat</h2>
      </section>
      <section>
        <h2>Intl.Locale</h2>
      </section>
      <section>
        <h2>Intl.NumberFormat</h2>
        <p>76523678</p>
        <h3 className="font-bold">format()</h3>
        {(
          [
            { notation: "compact" },
            { notation: "engineering" },
            { notation: "scientific" },
            { notation: "standard" },
            { style: "currency", currency: "EUR" },
            { style: "unit", unit: "liter" },
          ] as Intl.NumberFormatOptions[]
        ).map((options) => {
          const code = JSON.stringify(options);
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
          {formatNumberRange(2.9, 3.1, { style: "currency", currency: "EUR" })}
          <code>
            {JSON.stringify({
              style: "currency",
              currency: "EUR",
            })}
          </code>
        </p>
        <p className="flex flex-col justify-between whitespace-pre">
          {formatNumberRange(2.9, 3.1, {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
          })}
          <code>
            {JSON.stringify({
              style: "currency",
              currency: "EUR",
              maximumFractionDigits: 0,
            })}
          </code>
        </p>
      </section>
      <section>
        <h2>Intl.PluralRules</h2>
      </section>
      <section>
        <h2>Intl.RelativeTimeFormat</h2>
        <time dateTime={date.toUTCString()}>{date.toUTCString()}</time>
        {[formatTimeAgo(new Date(2022, 2, 20))].map((ds) => (
          <time
            key={ds}
            dateTime={ds}
            className="flex items-center justify-between"
          >
            {ds}
            <code>...</code>
          </time>
        ))}
      </section>
      <section>
        <h2>Intl.Segmenter</h2>
      </section>
    </main>
  );
}
