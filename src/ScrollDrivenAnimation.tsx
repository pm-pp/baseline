import { CSSProperties } from "react";
const colors = ["e851e8", "a84fa8", "6e0d6e"];

export function ScrollDrivenAnimation() {
  return (
    <div className="m-auto flex max-w-lg flex-col gap-8">
      <h2 className="text-xl font-bold">Carousel step indicator</h2>

      <div className="gallery relative">
        <div className="scrollcontainer flex [scroll-snap-type:x_mandatory] overflow-x-scroll [scroll-timeline:--scrollcontainer_inline]">
          <div
            className="gallery__progress absolute top-0 left-0 z-10 h-4 w-full origin-[0_50%] transform-[scaleX(calc(1/var(--num-images)))] animate-[auto_grow-progress_linear_forwards] bg-red-600 [animation-timeline:--scrollcontainer]"
            style={{ "--num-images": colors.length } as CSSProperties}
          ></div>

          {colors.map((color) => (
            <div
              key={color}
              className="gallery__entry flex-[0_0_100%] snap-center"
            >
              <img
                src={`https://dummyimage.com/832x554/${color}/fff`}
                alt={color}
                draggable="false"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-bold">Carousel with markers</h2>

      <div
        data-component="carousel"
        className="relative max-h-[70vmin] max-w-[70vmin] overflow-hidden rounded-lg border-4 border-violet-700 bg-white [timeline-scope:--carousel] hover:border-violet-400"
      >
        <ul
          className="entries flex size-full [scroll-snap-type:x_mandatory] overflow-x-scroll overscroll-contain scroll-smooth [scroll-timeline:--carousel_x] [scrollbar-width:none] focus:outline-none"
          tabIndex={0}
        >
          {["01", "02", "03", "04", "05"].map((id) => (
            <li
              key={`image-${id}`}
              className="flex flex-[100%_1_0] snap-center p-4 pb-16"
            >
              <a id={`carousel_${id}`} className="flex self-stretch">
                <img
                  className="block h-auto w-full object-contain object-[positon:50%_100%]"
                  src={`/matroshka-${id}.svg`}
                  alt=""
                  title=""
                  width="222"
                  height="184"
                  draggable="false"
                />
              </a>
            </li>
          ))}
        </ul>
        <ul className="markers absolute bottom-5 left-[50%] flex [translate:-50%_0] gap-4 text-4xl">
          {["01", "02", "03", "04", "05"].map((id, i) => (
            <li
              key={`marker-${id}`}
              className=""
              style={{ "--i": i + 1 } as CSSProperties}
            >
              <a
                href={`#carousel_${id}`}
                className="block aspect-square w-5 animate-[colorize-dot_linear] rounded-[50%] bg-violet-600 [animation-range:calc((var(--i)-1)*20%)_calc(var(--i)*20%+1px)] [animation-timeline:--carousel]"
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
