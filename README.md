# Things explored & learned

- [x] [Exclusive Accordion](https://developer.chrome.com/docs/css-ui/exclusive-accordion)
  - https://codepen.io/web-dot-dev/pen/BaMbKyM
  - https://codepen.io/web-dot-dev/pen/XWvBZNo
- [x] [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
  - [Popover API lands in Baseline](https://web.dev/blog/popover-api?hl=en)
  - [Popover API is Here](https://frontendmasters.com/blog/popover-api-is-here/)
  - [MDN Popover API examples](https://mdn.github.io/dom-examples/popover-api/)
  - [Chrome for Developers - 079: Popover and Dialog](https://www.youtube.com/watch?v=6u7EbMuxNkE)
  - [Progressively Enhanced Popover Toggletips](https://css-irl.info/progressively-enhanced-popover-toggletips)
- [ ] [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [x] [CSS Anchor Positioning](https://css-tricks.com/css-anchor-positioning-guide)
  - https://codepen.io/monknow/pen/jOgxmJg
- [x] [Scroll-Driven Animations](https://css-tricks.com/unleash-the-power-of-scroll-driven-animations/)
  - [A bunch of demos and tools to show off Scroll-driven Animations](https://scroll-driven-animations.style/)
- [x] [Full-bleed layout with modern CSS](https://css-tip.com/full-bleed-layout)
  - [Popping Comments With CSS Anchor Positioning and View-Driven Animations](https://css-tricks.com/popping-comments-with-css-anchor-positioning-and-view-driven-animations)
  - [Anchor tool](https://anchor-tool.com/)
  - [Una's demos](https://codepen.io/collection/ExkRWw)
- [ ] [The :user-valid and :user-invalid pseudo-classes](https://web.dev/articles/user-valid-and-user-invalid-pseudo-classes)
  - https://codepen.io/web-dot-dev/pen/wvNJGrO
- [ ] Consolidate CSS Grid
  - [CSS Grid Areas](https://ishadeed.com/article/css-grid-area)
- [ ] [importmap](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
  - https://web.dev/blog/import-maps-in-all-modern-browsers
  - https://www.youtube.com/watch?v=B_cJHBiY47M
- [ ] [Intl APIs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
  - [JS Intl API Examples - Dependency Free Formatting](https://www.youtube.com/watch?v=DyHXvcX0BGQ)
  - [Intl.DurationFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat)
- [ ] Local first web applications
  - [Local Data: Sqlite, LocalStorage, Session, Cookies and IndexDB](https://www.youtube.com/watch?v=VzUHeLsJOrs)
  - https://localfirstweb.dev/
  - https://www.localfirst.fm/
  - https://www.powersync.com/blog/local-first-is-a-big-deal-especially-for-the-web
  - https://squads.com/blog/building-better-apps-with-local-first-principles

## Popover versus modal dialog

[Source](https://web.dev/blog/popover-api?hl=en#popover_versus_modal_dialog)

The modal `<dialog>` element

- Opened with dialog.showModal().
- Closed with dialog.close().
- Makes the rest of the page inert.
- Does not support light-dismiss behavior.
- You can style the open state with the [open] attribute.
- Semantically represents an interactive component that blocks interaction with the rest of the page.

The `[popover]` attribute

- Can be opened with a declarative invoker (popovertarget).
- Closed with popovertarget (auto popover) or popovertargetaction=hide (manual popover).
- Does not make the rest of the page inert.
- Supports light-dismiss behavior.
- You can style the open state with the :popover-open pseudo-class.
- No inherent semantics.
