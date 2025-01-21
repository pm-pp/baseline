import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Accordion } from './Accordion';
import { Popover } from './Popover';
import { AnchorPositioning } from './AnchorPositioning';
import { Button } from './Button';
import { cn } from './cn';
import { ScrollDrivenAnimation } from './ScrollDrivenAnimation';
import { FullBleedLayout } from './FullBleedLayout';
import { Internationalization } from './Internationalization';
import { TargetText } from './TargetText';
import { InputValidation } from './InputValidation';

const routes = [
  { hash: '#accordion', title: 'Exclusive accordion', component: Accordion },
  { hash: '#popover-api', title: 'Popover API', component: Popover },
  {
    hash: '#css-anchor-positioning',
    title: 'CSS Anchor Positioning',
    component: AnchorPositioning,
  },
  {
    hash: '#scroll-driven-animations',
    title: 'Scroll-driven Animations',
    component: ScrollDrivenAnimation,
  },
  {
    hash: '#full-bleed-layout',
    title: 'Full-bleed layout',
    component: FullBleedLayout,
  },
  {
    hash: '#internationalization',
    title: 'Internationalization APIs',
    component: Internationalization,
  },
  {
    hash: '#highlight-text-fragment',
    title: 'Highlight text fragment',
    component: TargetText,
  },
  {
    hash: '#input-validation',
    title: 'Input validation',
    component: InputValidation,
  },
];

type Route = (typeof routes)[0];

const currentRoute = () => {
  const currentRoute = routes.find(({ hash }) => location.hash === hash);

  if (!currentRoute) {
    location.hash = routes[0].hash;
  }

  return currentRoute ?? routes[0];
};

function Nav({
  route,
  onNavigate,
}: {
  route: Route;
  onNavigate: (route: Route) => void;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const handleHashChange = useCallback(() => {
    navRef.current?.hidePopover();
    onNavigate(currentRoute());
  }, [onNavigate]);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  const BaseNav = ({ className }: ComponentPropsWithoutRef<'nav'>) => (
    <nav
      className={cn(
        'flex flex-col flex-wrap justify-center gap-2 text-2xl font-medium',
        className,
      )}
    >
      {routes.map((r) => (
        <a
          key={r.title}
          href={r.hash}
          className="px-4 decoration-emerald-400 decoration-wavy decoration-2 underline-offset-8 hover:underline data-[selected=true]:underline"
          data-selected={r.hash === route.hash}
        >
          {r.title}
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <div
        ref={navRef}
        id="nav"
        popover="auto"
        className="h-full bg-white backdrop:backdrop-blur-xs"
      >
        <BaseNav className="items-start gap-4 py-4" />
      </div>

      <BaseNav className="hidden md:flex md:flex-row" />
    </>
  );
}

function App() {
  const [route, setRoute] = useState<Route>(currentRoute);

  return (
    <>
      <header className="flex w-full flex-col gap-4 text-center">
        <div className="flex items-start gap-4">
          <Button
            className="w-fit p-1 text-violet-600 md:hidden"
            popoverTarget="nav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <h1 className="grow text-3xl font-bold">Baseline & beyond</h1>
        </div>

        <Nav route={route} onNavigate={setRoute} />
      </header>

      <route.component />
    </>
  );
}

export { App };
