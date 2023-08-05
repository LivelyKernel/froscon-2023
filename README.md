# froscon-2023

This repository contains the slides, demo code and other resources for the talk ["Live Programming and Designing of Dynamic Web Applications - Towards a totally RAD development experience"](https://programm.froscon.org/2023/events/2897.html) at FrOSCon 2023.

Recordings of the talk are available on [media.CCC](https://media.ccc.de/v/froscon2023-2897-live_programming_and_designing_of_dynamic_web_applications) and [YouTube](https://www.youtube.com/watch?v=XaMYx-OCaYo).

## Setup

You will need a working  `lively.next` installation. See [its repo](https://github.com/LivelyKernel/lively.next) for more details on how to get this.

This is a `lively.next` project. Import it as such before continuing.

## Car Demo

To load the demo from its original `json` snapshot, go to `http://localhost:9011/worlds/load?file=local_projects/LivelyKernel--froscon-2023/car.json` with a running `lively` server.
The following code demonstrates rapid prototyping with lively's focus on direct manipulation.

## Deployment Demo

This repository has a [GitHub Pages](https://livelykernel.github.io/froscon-2023/) deployment, which contains a bundled lively application as a demo. The code for the demo can be found inside of this repository. It relies on the official [`lively.next` `partsbin`](https://github.com/LivelyKernel/partsbin).

The GitHub actions to achieve this are automatically generated with a Beta Feature in lively.next, that will soon™️ become generally available! Stay tuned!

## License

Code is under MIT. The Slides and presentation itself are CC BY 4.0.
