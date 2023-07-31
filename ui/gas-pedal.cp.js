import { TilingLayout, component } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color, LinearGradient } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';

const GasPedal = component({
  borderColor: Color.rgb(56, 56, 56),
  borderRadius: 16,
  borderWidth: 2,
  extent: pt(85.2, 109.8),
  fill: new LinearGradient({ stops: [{ offset: 0, color: Color.rgb(173, 173, 173) }, { offset: 1, color: Color.rgba(110, 110, 110, 0) }], vector: rect(0.49999999999999994, 0, 6.123233995736766e-17, 1) }),
  layout: new TilingLayout({
    align: 'center',
    axisAlign: 'center',
    orderByIndex: true
  }),
  position: pt(644, 533.6),
  submorphs: [{
    type: Text,
    name: 'gas label',
    _fontWeightToRender: 700,
    dynamicCursorColoring: true,
    fill: Color.rgba(255, 255, 255, 0),
    fontColor: Color.rgb(87, 87, 87),
    fontSize: 24,
    fontWeight: 700,
    position: pt(21, 38),
    textAndAttributes: ['Gas', null]
  }]
});

export { GasPedal };
