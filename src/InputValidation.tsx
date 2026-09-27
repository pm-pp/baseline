import { ComponentProps, useRef } from 'react';
import { Button } from './Button';

function ValidationList(props: ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      role="list"
      aria-live="polite"
      aria-atomic="false"
      className="space-y-2"
    >
      <li className="hidden group-has-valid/field:block before:mr-1 before:hue-rotate-62 before:saturate-40 before:content-['✅']">
        Currently <kbd>:valid</kbd>
      </li>
      <li className="hidden group-has-invalid/field:block before:mr-1 before:hue-rotate-288 before:content-['❎']">
        Currently <kbd>:invalid</kbd>
      </li>
      <li className="hidden group-has-user-valid/field:block before:mr-1 before:hue-rotate-[-2deg] before:saturate-50 before:content-['✅']">
        Currently <kbd>:user-valid</kbd>
      </li>
      <li className="hidden group-has-user-invalid/field:block before:mr-1 before:hue-rotate-245 before:saturate-95 before:content-['❎']">
        Currently <kbd>:user-invalid</kbd>
      </li>
    </ul>
  );
}

export function InputValidation() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main className="mx-auto flex max-w-lg min-w-xs flex-col">
      <form
        ref={formRef}
        onSubmit={console.log}
        className="flex flex-col gap-6"
      >
        <Button type="submit" value="Validate">
          Validate
        </Button>
        <div className="group/field flex flex-col gap-2">
          <label htmlFor="input" className="field-label">
            Input
          </label>
          <input
            id="input"
            required
            className="field"
            aria-describedby="input-status"
          />
          <ValidationList id="input-status" />
        </div>
        <div className="group/field flex flex-col gap-2">
          <label htmlFor="input-optional" className="field-label">
            Input
          </label>
          <input
            id="input-optional"
            className="field"
            placeholder="An optional input is valid from the get-go"
            aria-describedby="input-optional-status"
          />
          <ValidationList id="input-optional-status" />
        </div>
        <div className="group/field flex flex-col gap-2">
          <label htmlFor="select" className="field-label">
            Select
          </label>
          <select
            id="select"
            required
            className="field"
            aria-describedby="select-status"
          >
            <option value="">Choose an option</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <ValidationList id="select-status" />
        </div>
        <div className="group/field flex flex-col gap-2">
          <label htmlFor="textarea" className="field-label">
            Textarea
          </label>
          <textarea
            id="textarea"
            required
            className="field"
            rows={2}
            aria-describedby="textarea-status"
          />
          <ValidationList id="textarea-status" />
        </div>
      </form>
    </main>
  );
}
