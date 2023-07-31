import { component, Morph } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color, LinearGradient } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { Polygon } from 'lively.morphic/morph.js';

const SteeringWheel = component({
  type: Morph,
  borderRadius: 100,
  clipMode: 'hidden',
  draggable: true,
  extent: pt(159.6, 157.5),
  fill: Color.rgba(14, 0, 0, 0.44),
  nativeCursor: 'grab',
  origin: pt(77.2, 78.8),
  position: pt(1372, 343.7),
  rotation: -33.812667953008265,
  submorphs: [{
    type: Text,
    name: 'aText',
    cursorWidth: 1.5,
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fontSize: 177,
    halosEnabled: false,
    lineWrapping: true,
    padding: rect(1, 1, 0, 0),
    position: pt(-88.9, -127.5),
    reactsToPointer: false,
    textAndAttributes: ['', {
      fontFamily: 'tabler-icons',
      fontWeight: '900'
    }]
  }, {
    type: Polygon,
    name: 'aPolygon',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(45.1, 70.9),
    fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(175, 175, 175) }, { offset: 1, color: Color.rgb(231, 231, 231) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
    position: pt(9.7, 2.8),
    rotation: 2.9538929106762764,
    vertices: [({ position: pt(44.941053204587085, 70.87464975594777), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 14.278301138877195), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(20.992515192891112, 3.318997582034699), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(45.12184086050754, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  }, {
    type: Polygon,
    name: 'aPolygon2',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(33.6, 45.1),
    fill: Color.rgb(175, 175, 175),
    position: pt(-39.9, 30.4),
    rotation: -2.2645889544493616,
    vertices: [({ position: pt(33.4698775296021, 45.070555063221214), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 9.079846742170517), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(15.63418884167721, 2.1106144974386907), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(33.60451924961201, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  }, {
    type: Polygon,
    name: 'aPolygon3',
    borderColor: Color.rgb(23, 160, 251),
    extent: pt(33.6, 45.1),
    fill: Color.rgb(175, 175, 175),
    position: pt(49.9, -19.9),
    rotation: 2.1142705775718387,
    vertices: [({ position: pt(33.4698775296021, 45.070555063221214), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(0, 9.079846742170517), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(15.63418884167721, 2.1106144974386907), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } }), ({ position: pt(33.60451924961201, 0), isSmooth: false, controlPoints: { next: pt(0, 0), previous: pt(0, 0) } })]
  }]
});

export { SteeringWheel };
