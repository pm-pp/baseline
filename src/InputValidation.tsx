function ValidationList() {
  return (
    <ul role="list" className="space-y-2">
      <li className="hidden group-has-valid/field:block before:mr-1 before:hue-rotate-[62deg] before:saturate-40 before:content-['✅']">
        Currently <code>:valid</code>
      </li>
      <li className="hidden group-has-invalid/field:block before:mr-1 before:hue-rotate-[288deg] before:content-['❎']">
        Currently <code>:invalid</code>
      </li>
      <li
        data-matches="user-valid"
        className="hidden group-has-[:user-valid]/field:block before:mr-1 before:hue-rotate-[-2deg] before:saturate-50 before:content-['✅']"
      >
        Currently <code>:user-valid</code>
      </li>
      <li className="hidden group-has-[:user-invalid]/field:block before:mr-1 before:hue-rotate-[245deg] before:saturate-[95%] before:content-['❎']">
        Currently <code>:user-invalid</code>
      </li>
    </ul>
  );
}

export function InputValidation() {
  return (
    <main className="m-auto flex max-w-lg min-w-xs flex-col gap-6">
      <div className="group/field flex flex-col gap-2">
        <label htmlFor="input" className="font-bold">
          Input
        </label>
        <input id="input" required className="field" />
        <ValidationList />
      </div>
      <div className="group/field flex flex-col gap-2">
        <label htmlFor="select" className="font-bold">
          Select
        </label>
        <select id="select" required className="field">
          <option value="">Choose an option</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <ValidationList />
      </div>
      <div className="group/field flex flex-col gap-2">
        <label htmlFor="textarea" className="font-bold">
          Textarea
        </label>
        <textarea id="textarea" required className="field" />
        <ValidationList />
      </div>
    </main>
  );
}
