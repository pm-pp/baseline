export function Accordion() {
  return (
    <div>
      <details open>
        <summary>Welcome to Learn CSS!</summary>
        <p>
          An evergreen CSS course and reference to level up your web styling
          expertise.
        </p>
        <p>
          <a href="#">Read Article</a>
        </p>
      </details>

      <details>
        <summary>Box Model</summary>
        <p>
          Everything displayed by CSS is a box. Understanding how the CSS Box
          Model works is therefore a core foundation of CSS.
        </p>
        <p>
          <a href="#">Read Article</a>
        </p>
      </details>

      <details>
        <summary>Selectors</summary>
        <p>
          To apply CSS to an element you need to select it. CSS provides you
          with a number of different ways to do this, and you can explore them
          in this module.
        </p>
        <p>
          <a href="#">Read Article</a>
        </p>
      </details>

      <details>
        <summary>…</summary>
        <p>
          <em>
            (chapters 4 to 30 of this course have been omitted for demonstation
            purposes)
          </em>
        </p>
      </details>
    </div>
  );
}
