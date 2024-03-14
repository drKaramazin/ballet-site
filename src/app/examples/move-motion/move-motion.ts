import {ballet} from "https://esm.sh/ballet";

ballet({
  element: '#scene',
  height: (w, h) => h,
  actors: {
    element: '#box',
    frames: {
      move: {
        startX: 0,
        endX: (w) => w - 30,
        startY: 0,
        endY: (w, h) => h - 30,
      },
      start: 0,
      end: (w, h) => h,
    },
  },
});