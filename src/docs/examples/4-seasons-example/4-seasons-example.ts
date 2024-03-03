import {
  SizeMotion,
  TimeFrame,
  actor,
  ballet, SceneOptions,
} from "ballet";

import {
  BackgroundLinearGradientMotion,
  SVGLinearGradientMotion,
  FillMotion,
} from "ballet-colors";

const picture = actor({ element: '#svg320' });

const pictureBack = actor({ element: '#picture-back' });

pictureBack.add(new TimeFrame(new SizeMotion({
  startWidth: (w) => w,
  endWidth: (w) => w,
  startHeight: (w, h) => h,
  endHeight: (w, h) => h
}), 0, (w, h) => h));

pictureBack.add(new TimeFrame(new BackgroundLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const mountainGradient1 = actor({
  element: '#mountain-gradient-1',
});
mountainGradient1.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const mountainGradient2 = actor({ element: '#mountain-gradient-2' });
mountainGradient2.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const mountainGradient3 = actor({ element: '#mountain-gradient-3' });
mountainGradient3.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const waterGradient1 = actor({ element: '#water-gradient-1' });
waterGradient1.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const landGradient1 = actor({ element: '#land-gradient-1'} );
landGradient1.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const landGradient2 = actor({ element: '#land-gradient-2' });
landGradient2.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const landGradient3 = actor({ element: '#land-gradient-3' });
landGradient3.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const firGradient1 = actor({ element: '#fir-gradient-1' });
firGradient1.add(new TimeFrame(new SVGLinearGradientMotion({
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
}), 0, (w, h) => 2 * h));

const tree1a = actor({ element: '#path56742' });
tree1a.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(138, 183, 250, 1)',
}), 0, (w, h) => 2 * h));

const tree1b = actor({ element: '#path61836' });
tree1b.add(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(243, 250, 254, 1)',
}), 0, (w, h) => 2 * h));

const tree1c = actor({ element: '#path33166' });
tree1c.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), 0, (w, h) => 2 * h));

const tree1d = actor({ element: '#path33168' });
tree1d.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), 0, (w, h) => 2 * h));

const tree1e = actor({ element: '#path33168' });
tree1e.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), 0, (w, h) => 2 * h));

const tree1f = actor({ element: '#path33164' });
tree1f.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(88, 105, 121, 1)',
}), 0, (w, h) => 2 * h));

const tree2a = actor({ element: '#path79222' });
tree2a.add(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(246, 253, 254, 1)',
}), 0, (w, h) => 2 * h));

const tree2b = actor({ element: '#path72458' });
tree2b.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(104, 167, 244, 1)',
}), 0, (w, h) => 2 * h));

const tree2c = actor({ element: '#path67208' });
tree2c.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), 0, (w, h) => 2 * h));

const tree2d = actor({ element: '#path72454' });
tree2d.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), 0, (w, h) => 2 * h));

const tree2e = actor({ element: '#path72456' });
tree2e.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(76, 93, 110, 1)',
}), 0, (w, h) => 2 * h));

const tree3a = actor({ element: '#path87309' });
tree3a.add(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(240, 249, 254, 1)',
}), 0, (w, h) => 2 * h));

const tree3b = actor({ element: '#path85306' });
tree3b.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(170, 208, 255, 1)',
}), 0, (w, h) => 2 * h));

const tree3c = actor({ element: '#path80474' });
tree3c.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(84, 101, 117, 1)',
}), 0, (w, h) => 2 * h));

const tree4a = actor({ element: '#path98561' });
tree4a.add(new TimeFrame(new FillMotion({
  start: 'rgba(253, 236, 156, 1)',
  end: 'rgba(243, 251, 254, 1)',
}), 0, (w, h) => 2 * h));

const tree4b = actor({ element: '#path94419' });
tree4b.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 189, 30, 1)',
  end: 'rgba(169, 208, 255, 1)',
}), 0, (w, h) => 2 * h));

const tree4c = actor({ element: '#path90135' });
tree4c.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), 0, (w, h) => 2 * h));

const tree4d = actor({ element: '#path94415' });
tree4d.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), 0, (w, h) => 2 * h));

const tree4e = actor({ element: '#path94417' });
tree4e.add(new TimeFrame(new FillMotion({
  start: 'rgba(207, 128, 116, 1)',
  end: 'rgba(85, 102, 119, 1)',
}), 0, (w, h) => 2 * h));

const stone1a = actor({ element: '#path47318' });
stone1a.add(new TimeFrame(new FillMotion({
  start: 'rgba(191, 123, 124, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), 0, (w, h) => 2 * h));

const stone1b = actor({ element: '#path15165' });
stone1b.add(new TimeFrame(new FillMotion({
  start: 'rgba(203, 135, 139, 1)',
  end: 'rgba(242, 248, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone2a = actor({ element: '#path54757' });
stone2a.add(new TimeFrame(new FillMotion({
  start: 'rgba(156, 114, 124, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone2b = actor({ element: '#path15167' });
stone2b.add(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 139, 1)',
  end: 'rgba(233, 246, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone3a = actor({ element: '#path57437' });
stone3a.add(new TimeFrame(new FillMotion({
  start: 'rgba(137, 95, 107, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), 0, (w, h) => 2 * h));

const stone3b = actor({ element: '#path15169' });
stone3b.add(new TimeFrame(new FillMotion({
  start: 'rgba(158, 115, 125, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone4a = actor({ element: '#path61150' });
stone4a.add(new TimeFrame(new FillMotion({
  start: 'rgba(192, 124, 125, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone4b = actor({ element: '#path15171' });
stone4b.add(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 140, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone5a = actor({ element: '#path66588' });
stone5a.add(new TimeFrame(new FillMotion({
  start: 'rgba(158, 115, 126, 1)',
  end: 'rgba(220, 238, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone5b = actor({ element: '#path15173' });
stone5b.add(new TimeFrame(new FillMotion({
  start: 'rgba(204, 134, 138, 1)',
  end: 'rgba(232, 246, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone6a = actor({ element: '#path69251' });
stone6a.add(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone6b = actor({ element: '#path15175' });
stone6b.add(new TimeFrame(new FillMotion({
  start: 'rgba(226, 181, 167, 1)',
  end: 'rgba(231, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone7a = actor({ element: '#path73792' });
stone7a.add(new TimeFrame(new FillMotion({
  start: 'rgba(190, 124, 125, 1)',
  end: 'rgba(220, 237, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone7b = actor({ element: '#path15177' });
stone7b.add(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 141, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone8a = actor({ element: '#path117232' });
stone8a.add(new TimeFrame(new FillMotion({
  start: 'rgba(191, 124, 125, 1)',
  end: 'rgba(220, 237, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone8b = actor({ element: '#path76568' });
stone8b.add(new TimeFrame(new FillMotion({
  start: 'rgba(226, 180, 171, 1)',
  end: 'rgba(233, 246, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone9a = actor({ element: '#path114263' });
stone9a.add(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone9b = actor({ element: '#path76512' });
stone9b.add(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 140, 1)',
  end: 'rgba(241, 250, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone10a = actor({ element: '#path112689' });
stone10a.add(new TimeFrame(new FillMotion({
  start: 'rgba(157, 116, 126, 1)',
  end: 'rgba(220, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone10b = actor({ element: '#path76510' });
stone10b.add(new TimeFrame(new FillMotion({
  start: 'rgba(227, 180, 167, 1)',
  end: 'rgba(233, 246, 255, 1)',
}), 0, (w, h) => 2 * h));

const stone11a = actor({ element: '#path109513' });
stone11a.add(new TimeFrame(new FillMotion({
  start: 'rgba(192, 124, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone11b = actor({ element: '#path76508' });
stone11b.add(new TimeFrame(new FillMotion({
  start: 'rgba(203, 134, 140, 1)',
  end: 'rgba(243, 250, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone12a = actor({ element: '#path107111' });
stone12a.add(new TimeFrame(new FillMotion({
  start: 'rgba(137, 95, 105, 1)',
  end: 'rgba(232, 245, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone12b = actor({ element: '#path76452' });
stone12b.add(new TimeFrame(new FillMotion({
  start: 'rgba(157, 115, 126, 1)',
  end: 'rgba(233, 245, 253, 1)',
}), 0, (w, h) => 2 * h));

const stone13a = actor({ element: '#path97738' });
stone13a.add(new TimeFrame(new FillMotion({
  start: 'rgba(158, 116, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone13b = actor({ element: '#path76450' });
stone13b.add(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 140, 1)',
  end: 'rgba(233, 245, 255, 1)',
}), 0, (w, h) => 2 * h));

const stone14a = actor({ element: '#path100293' });
stone14a.add(new TimeFrame(new FillMotion({
  start: 'rgba(192, 123, 125, 1)',
  end: 'rgba(221, 238, 254, 1)',
}), 0, (w, h) => 2 * h));

const stone14b = actor({ element: '#path76393' });
stone14b.add(new TimeFrame(new FillMotion({
  start: 'rgba(204, 135, 139, 1)',
  end: 'rgba(243, 251, 253, 1)',
}), 0, (w, h) => 2 * h));

const bush1a = actor({ element: '#path202' });
bush1a.add(new TimeFrame(new FillMotion({
  start: 'rgba(237, 87, 62, 1)',
  end: 'rgba(143, 201, 255, 1)',
}), 0, (w, h) => 2 * h));

const bush1b = actor({ element: '#path1857' });
bush1b.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 126, 113, 1)',
  end: 'rgba(172, 217, 254, 1)',
}), 0, (w, h) => 2 * h));

const bush2a = actor({ element: '#path6177' });
bush2a.add(new TimeFrame(new FillMotion({
  start: 'rgba(237, 87, 62, 1)',
  end: 'rgba(143, 201, 255, 1)',
}), 0, (w, h) => 2 * h));

const bush2b = actor({ element: '#path11132' });
bush2b.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 126, 113, 1)',
  end: 'rgba(172, 217, 254, 1)',
}), 0, (w, h) => 2 * h));

const fir1 = actor({ element: '#path70779' });
fir1.add(new TimeFrame(new FillMotion({
  start: 'rgba(66, 52, 73, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), 0, (w, h) => 2 * h));

const fir2 = actor({ element: '#path79958-1' });
fir2.add(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(77, 140, 234, 1)',
}), 0, (w, h) => 2 * h));

const fir3 = actor({ element: '#path73149-6' });
fir3.add(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), 0, (w, h) => 2 * h));

const fir4 = actor({ element: '#path79958' });
fir4.add(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), 0, (w, h) => 2 * h));

const fir5 = actor({ element: '#path73149' });
fir5.add(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 119, 214, 1)',
}), 0, (w, h) => 2 * h));

const fir6 = actor({ element: '#path79958-7' });
fir6.add(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), 0, (w, h) => 2 * h));

const fir7 = actor({ element: '#path73149-67' });
fir7.add(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(40, 120, 212, 1)',
}), 0, (w, h) => 2 * h));

const fir8 = actor({ element: '#path79958-18' });
fir8.add(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), 0, (w, h) => 2 * h));

const fir9 = actor({ element: '#path73149-67-8' });
fir9.add(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), 0, (w, h) => 2 * h));

const fir10 = actor({ element: '#path79958-18-7' });
fir10.add(new TimeFrame(new FillMotion({
  start: 'rgba(21, 178, 113, 1)',
  end: 'rgba(78, 140, 234, 1)',
}), 0, (w, h) => 2 * h));

const fir11 = actor({ element: '#path73149-67-8-4' });
fir11.add(new TimeFrame(new FillMotion({
  start: 'rgba(28, 160, 110, 1)',
  end: 'rgba(41, 121, 213, 1)',
}), 0, (w, h) => 2 * h));

const tree5a = actor({ element: '#path38774' });
tree5a.add(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), 0, (w, h) => 2 * h));

const tree5b = actor({ element: '#path38830' });
tree5b.add(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), 0, (w, h) => 2 * h));

const tree5c = actor({ element: '#path38832' });
tree5c.add(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), 0, (w, h) => 2 * h));

const tree5d = actor({ element: '#path38834' });
tree5d.add(new TimeFrame(new FillMotion({
  start: 'rgba(180, 100, 75, 1)',
  end: 'rgba(30, 63, 96, 1)',
}), 0, (w, h) => 2 * h));

const tree5e = actor({ element: '#path63048' });
tree5e.add(new TimeFrame(new FillMotion({
  start: 'rgba(255, 130, 19, 1)',
  end: 'rgba(104, 167, 243, 1)',
}), 0, (w, h) => 2 * h));

const tree5f = actor({ element: '#path50404' });
tree5f.add(new TimeFrame(new FillMotion({
  start: 'rgba(254, 188, 29, 1)',
  end: 'rgba(241, 249, 254, 1)',
}), 0, (w, h) => 2 * h));

ballet({
  element: '#scene',
  height: (w, h) => 4 * h,
  options: {
    stickyPlatformHeight: (w, h) => h,
  } as SceneOptions,
  actors: [
    picture,
    pictureBack,
    mountainGradient1,
    mountainGradient2,
    mountainGradient3,
    waterGradient1,
    landGradient1,
    landGradient2,
    landGradient3,
    firGradient1,
    tree1a,
    tree1b,
    tree1c,
    tree1d,
    tree1e,
    tree1f,
    tree2a,
    tree2b,
    tree2c,
    tree2d,
    tree2e,
    tree3a,
    tree3b,
    tree3c,
    tree4a,
    tree4b,
    tree4c,
    tree4d,
    tree4e,
    stone1a,
    stone1b,
    stone2a,
    stone2b,
    stone3a,
    stone3b,
    stone4a,
    stone4b,
    stone5a,
    stone5b,
    stone6a,
    stone6b,
    stone7a,
    stone7b,
    stone8a,
    stone8b,
    stone9a,
    stone9b,
    stone10a,
    stone10b,
    stone11a,
    stone11b,
    stone12a,
    stone12b,
    stone13a,
    stone13b,
    stone14a,
    stone14b,
    bush1a,
    bush1b,
    bush2a,
    bush2b,
    fir1,
    fir2,
    fir3,
    fir4,
    fir5,
    fir6,
    fir7,
    fir8,
    fir9,
    fir10,
    fir11,
    tree5a,
    tree5b,
    tree5c,
    tree5d,
    tree5e,
    tree5f,
  ],
});