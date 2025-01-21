import { ComponentPropsWithoutRef } from 'react';
import { cn } from './cn';

export function AnchorPositioning() {
  return (
    <main className="mx-auto flex max-w-lg flex-col gap-4 rounded-2xl bg-gray-100 p-8 lg:[anchor-name:--post]">
      <h1 className="text-2xl font-bold">Learn about CSS</h1>

      <img
        src="https://picsum.photos/id/10/2500/1667"
        alt="wood forest landscape"
        className="aspect-video w-full rounded-xl"
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
        pulvinar lectus, at venenatis diam. Mauris volutpat dapibus scelerisque.
        Sed vestibulum tortor eget ultricies lacinia. Sed scelerisque lectus id
        sem vestibulum, nec varius mi consectetur. In vitae mi nibh. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>

      <p className="flex flex-col gap-4">
        Nulla vulputate arcu at euismod ultricies. In volutpat, diam in
        malesuada hendrerit, elit mauris congue nunc, vitae suscipit tortor
        sapien a quam. Curabitur gravida, orci vitae tempor facilisis, mi ipsum
        lacinia leo, blandit ornare felis risus vitae dolor. Fusce purus nunc,
        hendrerit eu orci nec, ultrices varius ex. Aenean tristique tortor
        lectus. Nulla non accumsan dui. Pellentesque commodo dignissim pulvinar.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae;
        <Footnote className="lg:left-[anchor(end)] lg:[position-anchor:--post]">
          Wow, this is interesting
        </Footnote>
      </p>

      <h2 className="text-xl font-bold">Subtitle</h2>

      <p>
        Maecenas maximus accumsan scelerisque. Quisque consectetur eros
        porttitor quam iaculis condimentum. Quisque et scelerisque ante.
        Vestibulum ut tincidunt tellus. Sed imperdiet eu nunc quis semper. Donec
        id eleifend mauris. Nam eu porta lectus. Maecenas ac lorem nunc.
        Maecenas vitae facilisis justo, quis dapibus nisi. Mauris sed bibendum
        libero. Nam vestibulum elit non sem aliquet condimentum. Donec urna
        magna, condime
      </p>

      <p className="flex flex-col gap-4">
        Nulla vulputate arcu at euismod ultricies. In volutpat, diam in
        malesuada hendrerit, elit mauris congue nunc, vitae suscipit tortor
        sapien a quam. Curabitur gravida, orci vitae tempor facilisis, mi ipsum
        lacinia leo, blandit ornare felis risus vitae dolor. Fusce purus nunc,
        hendrerit eu orci nec, ultrices varius ex. Aenean tristique tortor
        lectus. Nulla non accumsan dui. Pellentesque commodo dignissim pulvinar.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae;
        <Footnote className="lg:right-[anchor(start)] lg:[position-anchor:--post]">
          Lorem Impsum is 2000 years old
        </Footnote>
      </p>

      <h2 className="text-xl font-bold">Subtitle</h2>

      <p>
        ultricies. In volutpat, diam in malesuada hendrerit, elit mauris congue
        nunc, vitae suscipit tortor sapien a quam. Curabitur gravida, orci vitae
        tempor facilisis, mi ipsum lacinia leo, blandit ornare felis risus vitae
        dolor. Fusce purus nunc, hendrerit eu orci nec, ultrices varius ex.
        Aenean tristique tortor lectus. Nulla non accumsan dui. Pellentesque
        commodo dignissim pulvinar. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
    </main>
  );
}

function Footnote({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={cn(
        "flex gap-1 rounded-xl bg-fuchsia-200 p-2 before:font-bold before:content-['Note:']",
        "lg:absolute lg:mx-5 lg:bg-gray-100 lg:before:content-['']",
        className,
      )}
    />
  );
}
