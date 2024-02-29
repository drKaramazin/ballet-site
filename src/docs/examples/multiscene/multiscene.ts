import {
  Ballet,
  StaticActor,
  TimeFrame,
  MoveMotion,
  StickyPlatformScene,
} from "ballet";

const box1 = new StaticActor(
  document.getElementById('box1')!,
  {
    initSize: false,
    initOpacity: false,
  }
);

const box2 = new StaticActor(
  document.getElementById('box2')!,
  {
    initSize: false,
    initOpacity: false,
  }
);

const box3_1 = new StaticActor(
  document.getElementById('box3-1')!,
  {
    initSize: false,
    initOpacity: false,
  }
);

const box3_2 = new StaticActor(
  document.getElementById('box3-2')!,
  {
    initSize: false,
    initOpacity: false,
  }
);

box1.addFrames([
  new TimeFrame(new MoveMotion({
    startX: () => 0,
    endX: (w, h) => w - 30,
    startY: () => 0,
    endY: (w, h) => h,
  }), (w, h) => 0, (w, h) => h),
]);

box2.addFrames([
  new TimeFrame(new MoveMotion({
    startX: (w, h) => w - 30,
    endX: () => 0,
    startY: () => 0,
    endY: (w, h) => h,
  }), (w, h) => 0, (w, h) => h),
]);

box3_1.addFrames([
  new TimeFrame(new MoveMotion({
    startX: () => 0,
    endX: (w, h) => w - 30,
    startY: () => 0,
    endY: (w, h) => h,
  }), (w, h) => 0, (w, h) => h),
]);

box3_2.addFrames([
  new TimeFrame(new MoveMotion({
    startX: (w, h) => w - 30,
    endX: () => 0,
    startY: () => 0,
    endY: (w, h) => h,
  }), (w, h) => 0, (w, h) => h),
]);

const scene1 = new StickyPlatformScene(
  document.getElementById('scene1')!,
  (w, h) => h,
);

const scene2 = new StickyPlatformScene(
  document.getElementById('scene2')!,
  (w, h) => h,
);

const scene3 = new StickyPlatformScene(
  document.getElementById('scene3')!,
  (w, h) => h,
);

scene1.add(box1);
scene2.add(box2);
scene3.add(box3_1);
scene3.add(box3_2);

const bt = new Ballet([scene1, scene2, scene3]);