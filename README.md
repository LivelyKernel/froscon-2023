# froscon-2023
This repository contains the slides, demo code and other resources for the talk "Live Programming and Designing of Dynamic Web Applications - Towards a totally RAD development experience" at FrOSCon 2023.


## Car Demo

The following code demonstrates rapid prototyping with lively's focus on direct manipulation.

```js
import { connect } from 'lively.bindings';
connect(this.get('steering wheel'), 'rotation', this.get('car'), 'steer');

connect(this.get('break pedal'), 'onMouseDown', this.get('car'), 'accelerate', { converter: () => -1 });

connect(this.get('gas pedal'), 'onMouseDown', this.get('car'), 'accelerate', { converter: () => 1 });

this.get('car').startStepping('move', 100);
this.get('car').accelerate(1);
this.get('car').stopStepping();

```