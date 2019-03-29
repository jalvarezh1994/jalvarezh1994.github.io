(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    { name: "03.canvas_atlas_", frames: [[0, 0, 412, 190], [0, 192, 145, 245], [147, 192, 111, 254]] }
  ];


  // symbols:



  (lib.hotdog = function () {
    this.spriteSheet = ss["03.canvas_atlas_"];
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();



  (lib.mostaza = function () {
    this.spriteSheet = ss["03.canvas_atlas_"];
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();



  (lib.Salsa = function () {
    this.spriteSheet = ss["03.canvas_atlas_"];
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();



  (lib.Mostaza = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Capa_1
    this.instance = new lib.mostaza();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 145, 245);


  (lib.Ketchup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Capa_1
    this.instance = new lib.Salsa();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 111, 254);


  (lib.Hotdog = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Capa_1
    this.instance = new lib.hotdog();
    this.instance.parent = this;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 412, 190);


  // stage content:
  (lib._03canvas = function (mode, startPosition, loop) {
    if (loop == null) { loop = false; } this.initialize(mode, startPosition, loop, {});

    // Salsa.png
    this.instance = new lib.Ketchup("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(644.9, 178.5, 0.456, 0.456, 0, 0, 0, 55.4, 127);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({ _off: false }, 0).to({ regY: 126.8, rotation: 96, x: 493.1, y: 271.9 }, 3).to({ regX: 55.3, rotation: 176.2, x: 343.1, y: 264.7 }, 3).to({ regY: 127, scaleX: 0.46, scaleY: 0.46, rotation: 240.4, x: 259.1, y: 211.6 }, 3).to({ regX: 55.4, scaleX: 0.46, scaleY: 0.46, rotation: 267, x: 250.9, y: 205.8 }, 3, cjs.Ease.cubicOut).to({ x: 245.8, y: 197.9 }, 3, cjs.Ease.cubicOut).to({ x: 224.6, y: 222.8 }, 3).to({ regX: 55.3, rotation: 222, x: 250.2, y: 288.8 }, 3, cjs.Ease.cubicIn).to({ regX: 55.4, regY: 126.9, rotation: 192, x: 342.5, y: 242.9 }, 4, cjs.Ease.cubicOut).to({ regX: 55.6, regY: 127, rotation: 27, x: 468.7, y: 112.9 }, 5, cjs.Ease.cubicInOut).to({ scaleX: 0.46, scaleY: 0.46, rotation: 26.8, y: 113.4 }, 1).wait(1).to({ regX: 55.5, rotation: 26.3, x: 468.3, y: 120.1 }, 0).wait(1).to({ rotation: 25.4, x: 468, y: 130.6 }, 0).wait(1).to({ rotation: 23.9, x: 467.2, y: 147.8 }, 0).wait(1).to({ scaleX: 0.46, scaleY: 0.46, rotation: 21.5, x: 466.1, y: 175.5 }, 0).wait(1).to({ rotation: 17.7, x: 464.3, y: 219.8 }, 0).wait(1).to({ rotation: 12.2, x: 461.7, y: 284.5 }, 0).wait(1).to({ rotation: 5.1, x: 458.3, y: 367.4 }, 0).wait(1).to({ regX: 55.3, rotation: -3, x: 454.6, y: 461.8 }, 0).to({ _off: true }, 1).wait(48));

    // mostaza.png
    this.instance_1 = new lib.Mostaza("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-54.4, 168.5, 0.461, 0.461, 0, 0, 0, 72.7, 122.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({ regX: 49.1, regY: 86.8, scaleX: 0.46, scaleY: 0.46, rotation: -140.6, x: -54.3 }, 0).to({ scaleX: 0.46, scaleY: 0.46, rotation: 18.5, x: 165.9, y: 267.4 }, 4).to({ regX: 49, scaleX: 0.46, scaleY: 0.46, rotation: -132.1, x: 295.6, y: 248.1 }, 4).to({ regX: 49.1, rotation: -232.6, x: 365.2, y: 190.5 }, 4).to({ x: 382.2, y: 179.5 }, 4, cjs.Ease.cubicOut).to({ regY: 86.6, rotation: -202.6, x: 303.3, y: 269.6 }, 4).to({ rotation: -187.6, x: 255.3, y: 305.6 }, 5, cjs.Ease.cubicOut).to({ regY: 86.5, rotation: -217.6, x: 183.4 }, 4, cjs.Ease.cubicInOut).to({ regX: 49, regY: 86.4, rotation: -157.6, x: 115.4, y: 269.6 }, 7, cjs.Ease.cubicIn).to({ regX: 49.1, rotation: -7.6, x: 68.4, y: 110.7 }, 7, cjs.Ease.cubicOut).to({ rotation: -7.6, y: 461.6 }, 5, cjs.Ease.cubicIn).to({ _off: true }, 1).wait(12));

    // Most line
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AAFgEIgJAJ");
    this.shape.setTransform(325.1, 303.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("Ah7BlQA3iSC7gxIAFgF");
    this.shape_1.setTransform(313.2, 313.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AjDCeQBVjoEqhLIAIgI");
    this.shape_2.setTransform(306, 319.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AjoC8QBkkUFjhZIAKgK");
    this.shape_3.setTransform(302.3, 322.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("Aj1DHQBpklF4heIAKgK");
    this.shape_4.setTransform(301, 323.3);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AD4jHIgKAKQl7BfhqEn");
    this.shape_5.setTransform(300.8, 323.4);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("Al9CuQCjgHDDhWQDpjTCdghIAPgK");
    this.shape_6.setTransform(287.4, 320.8);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AnXCEQDsBaDvhMQE3kjCKgYIATgL");
    this.shape_7.setTransform(278.4, 321.4);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AoNBfQEXCVELhHQFmlTB9gTIAWgK");
    this.shape_8.setTransform(273, 323);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AopBLQEuC0EZhFQF9lsB4gQIAXgK");
    this.shape_9.setTransform(270.2, 323.9);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AozBEQE3C+EehDQGFl1B2gPIAXgL");
    this.shape_10.setTransform(269.2, 324.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#CCFF00").ss(9.1, 1, 1).p("AI2jQIgKAKQhsgGmeGMQkfBDk4jA");
    this.shape_11.setTransform(269, 324.3);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.shape }] }, 75).to({ state: [{ t: this.shape_1 }] }, 1).to({ state: [{ t: this.shape_2 }] }, 1).to({ state: [{ t: this.shape_3 }] }, 1).to({ state: [{ t: this.shape_4 }] }, 1).to({ state: [{ t: this.shape_5 }] }, 1).to({ state: [{ t: this.shape_6 }] }, 1).to({ state: [{ t: this.shape_7 }] }, 1).to({ state: [{ t: this.shape_8 }] }, 1).to({ state: [{ t: this.shape_9 }] }, 1).to({ state: [{ t: this.shape_10 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 1).to({ state: [{ t: this.shape_11 }] }, 29).wait(1));

    // Ketch line
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f().s("#CC0000").ss(9.1, 1, 1).p("AgNAAIAbAA");
    this.shape_12.setTransform(211.4, 337.1);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f().s("#CC0000").ss(9.1, 1, 1).p("AleBhIAQAAQF0gwE5iR");
    this.shape_13.setTransform(245.1, 327.4);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f().s("#CC0000").ss(9.1, 1, 1).p("AoLCTIAYAAQIshJHTjc");
    this.shape_14.setTransform(262.4, 322.4);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f().s("#CC0000").ss(9.1, 1, 1).p("ApLClIAbAAQJwhRIMj4");
    this.shape_15.setTransform(268.8, 320.5);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f().s("#CC0000").ss(9.1, 1, 1).p("ApUCoIAbAAQJ6hTIUj8");
    this.shape_16.setTransform(269.7, 320.3);

    this.timeline.addTween(cjs.Tween.get({}).to({ state: [] }).to({ state: [{ t: this.shape_12 }] }, 49).to({ state: [{ t: this.shape_13 }] }, 1).to({ state: [{ t: this.shape_14 }] }, 1).to({ state: [{ t: this.shape_15 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 1).to({ state: [{ t: this.shape_16 }] }, 62).wait(1));

    // hotdog.png
    this.instance_2 = new lib.Hotdog("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(264.5, 194.5, 0.002, 0.005, 0, 0, 0, 206.1, 95.3);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({ regX: 206, regY: 95, scaleX: 0.54, scaleY: 0.54, x: 270.6, y: 197.1 }, 11, cjs.Ease.cubicIn).to({ regX: 206.2, scaleX: 0.38, scaleY: 0.38, x: 270.7 }, 4, cjs.Ease.cubicOut).to({ y: 334.1 }, 10, cjs.Ease.cubicOut).wait(90).to({ startPosition: 0 }, 0).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(187.1, 312, 352.9, 113);
  // library properties:
  lib.properties = {
    id: '4D356EB8FC3A9A459D102870DD35384B',
    width: 550,
    height: 400,
    fps: 24,
    color: "#FFFFFF",
    opacity: 1.00,
    manifest: [
      { src: "images/03.canvas_atlas_.png", id: "03.canvas_atlas_" }
    ],
    preloads: []
  };



  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  }
  p.play = function () { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function (ms) { if (ms) this.seek(ms); this.tickEnabled = false; }
  p.seek = function (ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
  p.getDuration = function () { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

  p.getTimelinePosition = function () { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions['4D356EB8FC3A9A459D102870DD35384B'] = {
    getStage: function () { return exportRoot.getStage(); },
    getLibrary: function () { return lib; },
    getSpriteSheet: function () { return ss; },
    getImages: function () { return img; }
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  }
  an.getComposition = function (id) {
    return an.compositions[id];
  }
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;