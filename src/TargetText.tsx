import { Button } from './Button';

export function TargetText() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-8">
      <Button
        onClick={() => {
          window.location.href += ':~:text=Curabitur,iaculis';
        }}
      >
        Append text fragment to URL
      </Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui
        orci, rutrum non gravida quis, pellentesque in urna. Sed imperdiet
        lobortis pellentesque. Sed a rhoncus augue. In mauris nibh, varius vitae
        mattis sit amet, feugiat non augue. Proin imperdiet velit a iaculis
        tincidunt. Sed tempor arcu erat, sit amet finibus mauris ullamcorper ut.
        Sed eget mollis risus. Ut at porttitor nisl, ac aliquam justo.
        Vestibulum congue odio a ornare condimentum. Nullam quis velit
        tincidunt, congue lorem quis, convallis felis. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc
        ac orci in metus elementum dignissim nec non mi. Nullam id porta lacus,
        vitae maximus nisi. Etiam egestas, libero vitae semper iaculis, urna sem
        placerat orci, nec molestie lacus justo eget augue. Nunc hendrerit
        tristique felis ac mollis. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Quisque scelerisque mattis pellentesque. Integer condimentum velit enim,
        id imperdiet sapien bibendum vitae. Aliquam erat volutpat. Nullam
        hendrerit mattis elit non consectetur. Aliquam sed tempus tellus, sit
        amet feugiat metus. Vivamus ut volutpat sapien, quis sodales dui. Etiam
        a molestie enim.
      </p>
      <p>
        Nulla vestibulum ultricies arcu, eu dignissim risus tincidunt sed.
        Aenean eu ultrices mauris, mollis tincidunt tellus. Integer augue risus,
        pretium luctus quam nec, mattis sollicitudin mauris. Curabitur vehicula
        justo volutpat tellus hendrerit, at aliquet lorem malesuada. Nunc mattis
        neque vitae augue consequat iaculis. Ut id porttitor purus. Fusce purus
        quam, varius vitae orci ac, varius venenatis ex. Pellentesque gravida,
        lorem id gravida pharetra, tortor nulla pulvinar ante, sit amet
        fermentum lacus urna ornare metus.
      </p>
      <p>
        Cras blandit sem eu venenatis congue. Vivamus luctus, lacus eu molestie
        finibus, erat lorem vestibulum neque, at dictum magna neque eget nibh.
        Donec cursus ante mollis, iaculis nisl a, facilisis quam. Curabitur
        pharetra eget mauris in mollis. Nunc lorem nisl, malesuada eget ligula
        gravida, sodales sodales dolor. Donec vitae elementum sapien, eget
        aliquam est. Morbi volutpat enim augue. Integer hendrerit, nibh a porta
        tristique, lectus nulla maximus risus, a tempor diam dui et ante. Sed
        nisl libero, convallis ac lectus varius, ornare efficitur diam. Fusce et
        tempor nunc. Morbi at ornare diam. Nullam sit amet lobortis libero.
      </p>
      <p>
        Nulla ut nulla nec turpis molestie rutrum. Morbi at bibendum neque.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Nunc quis erat sagittis sem laoreet ornare sed ac
        lacus. Curabitur sodales, ipsum eget sollicitudin gravida, nibh mauris
        viverra diam, eget viverra diam felis nec urna. Cras pharetra ipsum
        risus, vel vestibulum odio eleifend non. Morbi sem risus, scelerisque
        nec velit non, sagittis imperdiet justo. Phasellus tempor nibh non
        ligula sagittis, ut aliquet dolor rutrum. Nam pellentesque consequat
        blandit. Mauris id nulla laoreet, feugiat justo vel, dignissim lorem.
        Nam vulputate vestibulum sagittis. Praesent gravida aliquet est non
        interdum.
      </p>
    </main>
  );
}
