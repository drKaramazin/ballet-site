import { Value, ballet, timeFrame } from "ballet";

const sceneHeight: Value = (w, h) => h * 2;

const blockWidth: Value = (w, h) => w/4;
const blockHeight: Value = (w, h) => h/8;

const firstHalfBlockX: Value = (w, h) => w/4 - blockWidth(w, h)/2;
const secondHalfStartBlockX: Value = (w, h) => w/4 * 3 - blockWidth(w, h)/2;
const secondHalfEndBlockX: Value = (w, h) => w/2;
const firstHalfBlockY: Value = (w, h) => h/8 - blockHeight(w, h)/2;
const secondHalfBlockY: Value = (w, h) => h/8 * 3 - blockHeight(w, h)/2;

const endBlockWidth: Value = (w, h) => w/2 - firstHalfBlockX(w, h);

const hideBlockFrame = timeFrame({
  opacity: {
    start: () => 1,
    end: () => 0,
  },
  start: () => 0,
  end: (w, h) => h/2,
});

const agendaStartWidth: Value = (w, h) => w/4;
const agendaStartHeight: Value = (w, h) => h/4;
const agendaEndWidth: Value = (w, h) => w/2;
const agendaEndHeight: Value = (w, h) => h/2;

ballet({
  element: '#scene',
  height: sceneHeight,
  actors: [
    {
      element: '#first-block',
      frames: [
        {
          move: {
            startX: firstHalfBlockX,
            endX: firstHalfBlockX,
            startY: firstHalfBlockY,
            endY: firstHalfBlockY,
          },
          size: {
            startWidth: blockWidth,
            startHeight: blockHeight,
            endWidth: endBlockWidth,
            endHeight: blockHeight,
          },
          start: () => 0,
          end: (w, h) => h/2,
        },
        ...hideBlockFrame,
      ],
    },
    {
      element: '#second-block',
      frames: [
        {
          move: {
            startX: secondHalfStartBlockX,
            endX: secondHalfEndBlockX,
            startY: firstHalfBlockY,
            endY: firstHalfBlockY,
          },
          size: {
            startWidth: blockWidth,
            startHeight: blockHeight,
            endWidth: endBlockWidth,
            endHeight: blockHeight,
          },
          start: () => 0,
          end: (w, h) => h/2,
        },
        ...hideBlockFrame,
      ],
    },
    {
      element: '#third-block',
      frames: [
        {
          move: {
            startX: firstHalfBlockX,
            endX: firstHalfBlockX,
            startY: secondHalfBlockY,
            endY: secondHalfBlockY,
          },
          size: {
            startWidth: blockWidth,
            startHeight: blockHeight,
            endWidth: endBlockWidth,
            endHeight: blockHeight,
          },
          start: () => 0,
          end: (w, h) => h/2,
        },
        ...hideBlockFrame,
      ],
    },
    {
      element: '#fourth-block',
      frames: [
        {
          move: {
            startX: secondHalfStartBlockX,
            endX: secondHalfEndBlockX,
            startY: secondHalfBlockY,
            endY: secondHalfBlockY,
          },
          size: {
            startWidth: blockWidth,
            startHeight: blockHeight,
            endWidth: endBlockWidth,
            endHeight: blockHeight,
          },
          start: () => 0,
          end: (w, h) => h/2,
        },
        ...hideBlockFrame,
      ],
    },
    {
      element: '#agenda',
      frames: [{
        move: {
          startX: (w, h) => w/2 - agendaStartWidth(w, h)/2,
          endX: (w, h) => w/2 - agendaEndWidth(w, h)/2,
          startY: (w, h) => h/4 - agendaStartHeight(w, h)/2,
          endY: (w, h) => h/4 - agendaEndHeight(w, h)/2,
        },
        size: {
          startWidth: agendaStartWidth,
          startHeight: agendaStartHeight,
          endWidth: agendaEndWidth,
          endHeight: agendaEndHeight,
        },
        opacity: {
          start: () => 0,
          end: () => 1,
        },
        start: () => 0,
        end: (w, h) => h/2,
      }],
    },
  ]
});