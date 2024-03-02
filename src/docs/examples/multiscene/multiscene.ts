import { ballet } from "ballet";

ballet([{
  element: '#scene1',
  height: (w, h) => h,
  actors: {
    element: '#box1',
    options: {
      initSize: false,
      initOpacity: false,
    },
    frames: {
      move: {
        startX: () => 0,
        endX: (w) => w - 30,
        startY: () => 0,
        endY: (w, h) => h,
      },
      start: () => 0,
      end: (w, h) => h,
    },
  },
}, {
  element: '#scene2',
  height: (w, h) => h,
  actors: {
    element: '#box2',
    options: {
      initSize: false,
      initOpacity: false,
    },
    frames: {
      move: {
        startX: (w) => w - 30,
        endX: () => 0,
        startY: () => 0,
        endY: (w, h) => h,
      },
      start: () => 0,
      end: (w, h) => h,
    },
  },
}, {
  element: '#scene3',
  height: (w, h) => h,
  actors: [{
    element: '#box3-1',
    options: {
      initSize: false,
      initOpacity: false,
    },
    frames: {
      move: {
        startX: () => 0,
        endX: (w) => w - 30,
        startY: () => 0,
        endY: (w, h) => h,
      },
      start: () => 0,
      end: (w, h) => h,
    },
  }, {
    element: '#box3-2',
    options: {
      initSize: false,
      initOpacity: false,
    },
    frames: {
      move: {
        startX: (w) => w - 30,
        endX: () => 0,
        startY: () => 0,
        endY: (w, h) => h,
      },
      start: () => 0,
      end: (w, h) => h,
    },
  }],
}]);