export function FullBleedLayout() {
  return (
    <main className="[margin-inline:max(var(--m),50cqw-var(--w)/2)] [--m:1em] [--w:600px] *:py-[.3em]">
      <section>
        <h1 className="text-xl font-bold">Main title</h1>
        <p className="text-justify">
          Dragée powder bear claw tiramisu pudding gummi bears wafer. Macaroon
          chocolate cake cake marzipan icing carrot cake macaroon sweet. Lemon
          drops
        </p>
      </section>
      <section className="mx-[min(-1*var(--m),var(--w)/2-50cqw)] my-[var(--m)] bg-pink-200 px-[var(--m)]">
        <h2 className="text-lg font-bold">Full bleed (no margin)</h2>
        <p className="text-justify">
          cotton candy bear claw. Dessert danish pastry tootsie roll biscuit
          jujubes lollipop pastry tootsie roll.
        </p>
      </section>
      <section className="mx-[min(-1*var(--m),var(--w)/2-50cqw+var(--m))] my-[var(--m)] bg-pink-200 px-[var(--m)]">
        <h2 className="text-lg font-bold">
          Full bleed (margin on big screens)
        </h2>
        <p className="text-justify">
          cotton candy bear claw. Dessert danish pastry tootsie roll biscuit
          jujubes lollipop pastry tootsie roll.
        </p>
      </section>
      <section className="mx-[min(0px,var(--w)/2-50cqw)] my-[var(--m)] bg-pink-200 px-[var(--m)]">
        <h2 className="text-lg font-bold">
          Full bleed (margin on small screens)
        </h2>
        <p className="text-justify">
          cotton candy bear claw. Dessert danish pastry tootsie roll biscuit
          jujubes lollipop pastry tootsie roll.
        </p>
      </section>
      <section className="mx-[min(0px,var(--w)/2-50cqw+var(--m))] my-[var(--m)] bg-pink-200 px-[var(--m)]">
        <h2 className="text-lg font-bold">Full bleed (always a margin)</h2>
        <p className="text-justify">
          cotton candy bear claw. Dessert danish pastry tootsie roll biscuit
          jujubes lollipop pastry tootsie roll.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-bold">lemon drops candy</h2>
        <p className="text-justify">
          Dessert halvah sesame snaps jelly beans caramels marzipan. Cheesecake
          ice cream gummies lemon drops candy chocolate bar dessert pie. Tootsie
          roll gummi bears biscuit marshmallow sweet halvah fruitcake marzipan.
          Candy canes cake gummies marzipan marshmallow lollipop. Lemon drops
          apple pie tootsie roll pastry apple pie jelly-o. Biscuit lollipop
          biscuit muffin carrot cak
        </p>
      </section>
      <section>
        <h3 className="font-bold">full bleed image</h3>
        <div className="mx-[min(-1*var(--m),var(--w)/2-50cqw+var(--m))]">
          <img
            className="h-[300px] w-full object-cover"
            src="https://picsum.photos/id/115/1000/300"
            alt=""
          />
        </div>
      </section>
      <section>
        <h3 className="font-bold">Cake pie lollipop</h3>
        <p className="text-justify">
          Jelly chocolate biscuit sesame snaps dessert chocolate. Topping
          jelly-o jelly jujubes marzipan sugar plum. Cake pie lollipop halvah
          shortbread. Powder tiramisu tart wafer marshmallow gingerbread powder
        </p>
      </section>
    </main>
  );
}
