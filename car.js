import { Morph } from 'lively.morphic';
import { pt, Point } from 'lively.graphics';

export class Car extends Morph {
  static get properties () {
    return {
      speedVector: { defaultValue: pt(0, 0) }
    };
  }

  move () {
    this.center = this.center.addPt(this.speedVector);
    this.rotation = this.speedVector.theta() + Math.PI / 2;
  }

  steer (angle) {
    this.speedVector = Point.polar(this.speedVector.r(), angle);
  }

  accelerate (inc) {
    this.speedVector = Point.polar(Math.max(0, this.speedVector.r() + inc), this.speedVector.theta());
  }
}
