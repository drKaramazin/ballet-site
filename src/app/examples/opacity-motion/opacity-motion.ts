import {ballet} from "https://esm.sh/ballet";

ballet({
  element: '#scene',
  height: (w, h) => h,
  actors: {
    element: '#box',
    frames: {
      opacity: {
        start: 1,
        end: 0,
      },
      start: 0,
      end: (w, h) => h,
    },
  },
});