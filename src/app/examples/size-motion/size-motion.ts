import {ballet} from "https://esm.sh/ballet";

ballet({
  element: '#scene',
  height: (w, h) => h,
  actors: {
    element: '#box',
    frames: {
      size: {
        startWidth: 30,
        endWidth: (w) => w,
        startHeight: (w, h) => h,
        endHeight: (w, h) => h,
      },
      start: 0,
      end: (w, h) => h,
    },
  },
});