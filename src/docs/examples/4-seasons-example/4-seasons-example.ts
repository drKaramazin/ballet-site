import {
  RefActor,
  Ballet,
  SizeMotion,
  StaticActor,
  StickyPlatformScene,
  TimeFrame,
  Value
} from "ballet";

import {
  BackgroundLinearGradientMotion,
  SVGLinearGradientMotion,
  FillMotion,
} from "ballet-colors";

const sceneFn: { height: Value } = {
  height: (w, h) => h,
};

const scene = new StickyPlatformScene(
  document.getElementById('scene')!,
  (w, h) => 4 * h,
  {
    stickyPlatformHeight: sceneFn.height,
  }
);

const picture = new RefActor(document.getElementById('svg320')!);

const pictureBack = new StaticActor(document.getElementById('picture-back')!, {
  initOpacity: false,
  initPosition: false,
});

pictureBack.addFrame(new TimeFrame(new SizeMotion({
  startWidth: (w) => w,
  endWidth: (w) => w,
  startHeight: (w, h) => h,
  endHeight: (w, h) => h
}), () => 0, (w, h) => h));

pictureBack.addFrame(new TimeFrame(new BackgroundLinearGradientMotion({
  start: {
    angle: 0,
    stopList: [{
      lengthPercentage: 35,
      color: 'rgba(222, 243, 212, 1)',
    }, {
      lengthPercentage: 100,
      color: 'rgba(238, 237, 176, 1)',
    }]
  },
  end: {
    angle: 0,
    stopList: [{
      lengthPercentage: 35,
      color: 'rgba(154, 189, 250, 1)',
    }, {
      lengthPercentage: 100,
      color: 'rgba(185, 216, 252, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const mountainGradient1 = new RefActor(document.getElementById('mountain-gradient-1')!);
mountainGradient1.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(249, 208, 208, 1)',
    }, {
      lengthPercentage: 27,
      color: 'rgba(252, 230, 230, 1)',
    }, {
      lengthPercentage: 68,
      color: 'rgba(252, 230, 230, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(244, 250, 253, 1)',
    }, {
      lengthPercentage: 27,
      color: 'rgba(195, 219, 255, 1)',
    }, {
      lengthPercentage: 68,
      color: 'rgba(195, 219, 255, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const mountainGradient2 = new RefActor(document.getElementById('mountain-gradient-2')!);
mountainGradient2.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(245, 181, 146, 1)',
    }, {
      lengthPercentage: 20,
      color: 'rgba(252, 223, 146, 1)',
    }, {
      lengthPercentage: 75,
      color: 'rgba(252, 223, 146, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(205, 227, 255, 1)',
    }, {
      lengthPercentage: 20,
      color: 'rgba(196, 220, 254, 1)',
    }, {
      lengthPercentage: 75,
      color: 'rgba(196, 220, 254, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const mountainGradient3 = new RefActor(document.getElementById('mountain-gradient-3')!);
mountainGradient3.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(245, 181, 146, 1)',
    }, {
      lengthPercentage: 17,
      color: 'rgba(252, 223, 146, 1)',
    }, {
      lengthPercentage: 78,
      color: 'rgba(252, 223, 146, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(218, 237, 253, 1)',
    }, {
      lengthPercentage: 17,
      color: 'rgba(192, 218, 254, 1)',
    }, {
      lengthPercentage: 78,
      color: 'rgba(192, 218, 254, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const waterGradient1 = new RefActor(document.getElementById('water-gradient-1')!);
waterGradient1.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(255, 219, 67, 1)',
    }, {
      lengthPercentage: 25,
      color: 'rgba(137, 190, 255, 1)',
    }, {
      lengthPercentage: 55,
      color: 'rgba(137, 190, 255, 1)',
    }, {
      lengthPercentage: 70,
      color: 'rgba(231, 195, 118, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(205, 224, 254, 1)',
    }, {
      lengthPercentage: 25,
      color: 'rgba(217, 235, 255, 1)',
    }, {
      lengthPercentage: 55,
      color: 'rgba(243, 251, 254, 1)',
    }, {
      lengthPercentage: 70,
      color: 'rgba(129, 183, 250, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const landGradient1 = new RefActor(document.getElementById('land-gradient-1')!);
landGradient1.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(237, 85, 61, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(236, 86, 61, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(100, 167, 248, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(100, 168, 249, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const landGradient2 = new RefActor(document.getElementById('land-gradient-2')!);
landGradient2.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(255, 127, 14, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(250, 129, 20, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(183, 211, 254, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(184, 213, 255, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const landGradient3 = new RefActor(document.getElementById('land-gradient-3')!);
landGradient3.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(254, 189, 29, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(253, 189, 29, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(184, 213, 255, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(184, 213, 255, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const firGradient1 = new RefActor(document.getElementById('fir-gradient-1')!);
firGradient1.addFrame(new TimeFrame(new SVGLinearGradientMotion({
  start: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(27, 159, 108, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(27, 160, 110, 1)',
    }]
  },
  end: {
    angle: 90,
    stopList: [{
      lengthPercentage: 5,
      color: 'rgba(103, 166, 244, 1)',
    }, {
      lengthPercentage: 95,
      color: 'rgba(104, 167, 244, 1)',
    }]
  },
}), () => 0, (w, h) => 2 * h));

const tree1a = new RefActor(document.getElementById('path56742')!);
tree1a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(138, 183, 250, 1)',
}), () => 0, (w, h) => 2 * h));

const tree1b = new RefActor(document.getElementById('path61836')!);
tree1b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(243, 250, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const tree1c = new RefActor(document.getElementById('path33166')!);
tree1c.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), () => 0, (w, h) => 2 * h));

const tree1d = new RefActor(document.getElementById('path33168')!);
tree1d.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), () => 0, (w, h) => 2 * h));

const tree1e = new RefActor(document.getElementById('path33168')!);
tree1e.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), () => 0, (w, h) => 2 * h));

const tree1f = new RefActor(document.getElementById('path33164')!);
tree1f.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), () => 0, (w, h) => 2 * h));

const tree2a = new RefActor(document.getElementById('path79222')!);
tree2a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(246, 253, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const tree2b = new RefActor(document.getElementById('path72458')!);
tree2b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(104, 167, 244, 1)',
}), () => 0, (w, h) => 2 * h));

const tree2c = new RefActor(document.getElementById('path67208')!);
tree2c.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), () => 0, (w, h) => 2 * h));

const tree2d = new RefActor(document.getElementById('path72454')!);
tree2d.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), () => 0, (w, h) => 2 * h));

const tree2e = new RefActor(document.getElementById('path72456')!);
tree2e.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), () => 0, (w, h) => 2 * h));

const tree3a = new RefActor(document.getElementById('path87309')!);
tree3a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(240, 249, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const tree3b = new RefActor(document.getElementById('path85306')!);
tree3b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(170, 208, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const tree3c = new RefActor(document.getElementById('path80474')!);
tree3c.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(84, 101, 117, 1)',
}), () => 0, (w, h) => 2 * h));

const tree4a = new RefActor(document.getElementById('path98561')!);
tree4a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(243, 251, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const tree4b = new RefActor(document.getElementById('path94419')!);
tree4b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(169, 208, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const tree4c = new RefActor(document.getElementById('path90135')!);
tree4c.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), () => 0, (w, h) => 2 * h));

const tree4d = new RefActor(document.getElementById('path94415')!);
tree4d.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), () => 0, (w, h) => 2 * h));

const tree4e = new RefActor(document.getElementById('path94417')!);
tree4e.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), () => 0, (w, h) => 2 * h));

const stone1a = new RefActor(document.getElementById('path47318')!);
stone1a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(191, 123, 124, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const stone1b = new RefActor(document.getElementById('path15165')!);
stone1b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(203, 135, 139, 1)',
  end: 'rgba(242, 248, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone2a = new RefActor(document.getElementById('path54757')!);
stone2a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(156, 114, 124, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone2b = new RefActor(document.getElementById('path15167')!);
stone2b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 139, 1)',
  end: 'rgba(233, 246, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone3a = new RefActor(document.getElementById('path57437')!);
stone3a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(137, 95, 107, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const stone3b = new RefActor(document.getElementById('path15169')!);
stone3b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(158, 115, 125, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone4a = new RefActor(document.getElementById('path61150')!);
stone4a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(192, 124, 125, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone4b = new RefActor(document.getElementById('path15171')!);
stone4b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 140, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone5a = new RefActor(document.getElementById('path66588')!);
stone5a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(158, 115, 126, 1)',
  end: 'rgba(220, 238, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone5b = new RefActor(document.getElementById('path15173')!);
stone5b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(204, 134, 138, 1)',
  end: 'rgba(232, 246, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone6a = new RefActor(document.getElementById('path69251')!);
stone6a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone6b = new RefActor(document.getElementById('path15175')!);
stone6b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(226, 181, 167, 1)',
  end: 'rgba(231, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone7a = new RefActor(document.getElementById('path73792')!);
stone7a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(190, 124, 125, 1)',
  end: 'rgba(220, 237, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone7b = new RefActor(document.getElementById('path15177')!);
stone7b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 141, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone8a = new RefActor(document.getElementById('path117232')!);
stone8a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(191, 124, 125, 1)',
  end: 'rgba(220, 237, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone8b = new RefActor(document.getElementById('path76568')!);
stone8b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(226, 180, 171, 1)',
  end: 'rgba(233, 246, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone9a = new RefActor(document.getElementById('path114263')!);
stone9a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone9b = new RefActor(document.getElementById('path76512')!);
stone9b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 140, 1)',
  end: 'rgba(241, 250, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone10a = new RefActor(document.getElementById('path112689')!);
stone10a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(157, 116, 126, 1)',
  end: 'rgba(220, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone10b = new RefActor(document.getElementById('path76510')!);
stone10b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(227, 180, 167, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const stone11a = new RefActor(document.getElementById('path109513')!);
stone11a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(192, 124, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone11b = new RefActor(document.getElementById('path76508')!);
stone11b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 140, 1)',
  end: 'rgba(243, 250, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone12a = new RefActor(document.getElementById('path107111')!);
stone12a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(137, 95, 105, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone12b = new RefActor(document.getElementById('path76452')!);
stone12b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(157, 115, 126, 1)',
  end: 'rgba(233, 245, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const stone13a = new RefActor(document.getElementById('path97738')!);
stone13a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(158, 116, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone13b = new RefActor(document.getElementById('path76450')!);
stone13b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 140, 1)',
  end: 'rgba(233, 245, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const stone14a = new RefActor(document.getElementById('path100293')!);
stone14a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const stone14b = new RefActor(document.getElementById('path76393')!);
stone14b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 139, 1)',
  end: 'rgba(243, 251, 253, 1)',
}), () => 0, (w, h) => 2 * h));

const bush1a = new RefActor(document.getElementById('path202')!);
bush1a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(237, 87, 62, 1)',
  end: 'rgba(143, 201, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const bush1b = new RefActor(document.getElementById('path1857')!);
bush1b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 126, 113, 1)',
  end: 'rgba(172, 217, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const bush2a = new RefActor(document.getElementById('path6177')!);
bush2a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(237, 87, 62, 1)',
  end: 'rgba(143, 201, 255, 1)',
}), () => 0, (w, h) => 2 * h));

const bush2b = new RefActor(document.getElementById('path11132')!);
bush2b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 126, 113, 1)',
  end: 'rgba(172, 217, 254, 1)',
}), () => 0, (w, h) => 2 * h));

const fir1 = new RefActor(document.getElementById('path70779')!);
fir1.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(66, 52, 73, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), () => 0, (w, h) => 2 * h));

const fir2 = new RefActor(document.getElementById('path79958-1')!);
fir2.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(77, 140, 234, 1)',
}), () => 0, (w, h) => 2 * h));

const fir3 = new RefActor(document.getElementById('path73149-6')!);
fir3.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), () => 0, (w, h) => 2 * h));

const fir4 = new RefActor(document.getElementById('path79958')!);
fir4.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), () => 0, (w, h) => 2 * h));

const fir5 = new RefActor(document.getElementById('path73149')!);
fir5.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 119, 214, 1)',
}), () => 0, (w, h) => 2 * h));

const fir6 = new RefActor(document.getElementById('path79958-7')!);
fir6.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), () => 0, (w, h) => 2 * h));

const fir7 = new RefActor(document.getElementById('path73149-67')!);
fir7.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(40, 120, 212, 1)',
}), () => 0, (w, h) => 2 * h));

const fir8 = new RefActor(document.getElementById('path79958-18')!);
fir8.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), () => 0, (w, h) => 2 * h));

const fir9 = new RefActor(document.getElementById('path73149-67-8')!);
fir9.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), () => 0, (w, h) => 2 * h));

const fir10 = new RefActor(document.getElementById('path79958-18-7')!);
fir10.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), () => 0, (w, h) => 2 * h));

const fir11 = new RefActor(document.getElementById('path73149-67-8-4')!);
fir11.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5a = new RefActor(document.getElementById('path38774')!);
tree5a.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5b = new RefActor(document.getElementById('path38830')!);
tree5b.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5c = new RefActor(document.getElementById('path38832')!);
tree5c.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5d = new RefActor(document.getElementById('path38834')!);
tree5d.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5e = new RefActor(document.getElementById('path63048')!);
tree5e.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(255, 130, 19, 1)',
  end: 'rgba(104, 167, 243, 1)',
}), () => 0, (w, h) => 2 * h));

const tree5f = new RefActor(document.getElementById('path50404')!);
tree5f.addFrame(new TimeFrame(new FillMotion({
  start: 'rgba(254, 188, 29, 1)',
  end: 'rgba(241, 249, 254, 1)',
}), () => 0, (w, h) => 2 * h));

scene.add(picture);
scene.add(pictureBack);
scene.add(mountainGradient1);
scene.add(mountainGradient2);
scene.add(mountainGradient3);
scene.add(waterGradient1);
scene.add(landGradient1);
scene.add(landGradient2);
scene.add(landGradient3);
scene.add(firGradient1);
scene.add(tree1a);
scene.add(tree1b);
scene.add(tree1c);
scene.add(tree1d);
scene.add(tree1e);
scene.add(tree1f);
scene.add(tree2a);
scene.add(tree2b);
scene.add(tree2c);
scene.add(tree2d);
scene.add(tree2e);
scene.add(tree3a);
scene.add(tree3b);
scene.add(tree3c);
scene.add(tree4a);
scene.add(tree4b);
scene.add(tree4c);
scene.add(tree4d);
scene.add(tree4e);
scene.add(stone1a);
scene.add(stone1b);
scene.add(stone2a);
scene.add(stone2b);
scene.add(stone3a);
scene.add(stone3b);
scene.add(stone4a);
scene.add(stone4b);
scene.add(stone5a);
scene.add(stone5b);
scene.add(stone6a);
scene.add(stone6b);
scene.add(stone7a);
scene.add(stone7b);
scene.add(stone8a);
scene.add(stone8b);
scene.add(stone9a);
scene.add(stone9b);
scene.add(stone10a);
scene.add(stone10b);
scene.add(stone11a);
scene.add(stone11b);
scene.add(stone12a);
scene.add(stone12b);
scene.add(stone13a);
scene.add(stone13b);
scene.add(stone14a);
scene.add(stone14b);
scene.add(bush1a);
scene.add(bush1b);
scene.add(bush2a);
scene.add(bush2b);
scene.add(fir1);
scene.add(fir2);
scene.add(fir3);
scene.add(fir4);
scene.add(fir5);
scene.add(fir6);
scene.add(fir7);
scene.add(fir8);
scene.add(fir9);
scene.add(fir10);
scene.add(fir11);
scene.add(tree5a);
scene.add(tree5b);
scene.add(tree5c);
scene.add(tree5d);
scene.add(tree5e);
scene.add(tree5f);

const sr = new Ballet(scene);