import { component, Morph } from 'lively.morphic';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';

const Car = component({
  type: Morph,
  borderRadius: 8,
  extent: pt(127.7, 167.7),
  fill: Color.rgb(244, 67, 54),
  origin: pt(67.7, 86.7),
  position: pt(1113.2, 527.1),
  rotation: 1.5707963267948966,
  submorphs: [{
    name: 'tire',
    borderRadius: 9,
    extent: pt(36.2, 74.5),
    fill: Color.rgb(64, 64, 64),
    position: pt(42.7, -104)
  }, {
    name: 'tire1',
    borderRadius: 9,
    extent: pt(36.2, 74.5),
    fill: Color.rgb(64, 64, 64),
    position: pt(42.2, 32.8)
  }, {
    name: 'tire2',
    borderRadius: 9,
    extent: pt(36.2, 74.5),
    fill: Color.rgb(64, 64, 64),
    position: pt(-83.1, 31.3)
  }, {
    name: 'tire3',
    borderRadius: 9,
    extent: pt(36.2, 74.5),
    fill: Color.rgb(64, 64, 64),
    position: pt(-84.1, -105.3)
  }, {
    name: 'aMorph',
    borderRadius: 9,
    extent: pt(72.7, 57.4),
    fill: Color.rgb(187, 225, 255),
    position: pt(-39.3, -51.3),
    rotation: -0.013692852748447818
  }]
});

export { Car };
