import { part, component } from 'lively.morphic';
import { pt } from 'lively.graphics/geometry-2d.js';
import { Clock } from 'LivelyKernel--partsbin/ui/clock.cp.js';
import { ThermometerConverter, TemperatureConverter } from 'LivelyKernel--partsbin/ui/temperature-converter.cp.js';
import { Color } from 'lively.graphics/color.js';
'format esm';
const AnOnlineDemo = component({
  borderColor: Color.rgb(23, 160, 251),
  borderWidth: 1,
  extent: pt(614.5, 559),
  position: pt(675.5, 261.5),
  submorphs: [part(Clock, {
    name: 'anEllipse',
    position: pt(16, 12),
    scale: 0.2903970893354072,
    submorphs: [{
      name: 'minute hand',
      rotation: 6.492624817418905
    }, {
      name: 'hour hand',
      rotation: 4.468042885105484
    }]
  }), part(ThermometerConverter, {
    name: 'thermometer',
    position: pt(122.4, 282)
  }),
  part(TemperatureConverter, {
    name: 'orig',
    position: pt(122.9, 25.5)
  })]
});

export { AnOnlineDemo };
