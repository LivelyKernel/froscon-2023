import { Morph } from 'lively.morphic';

export class SteeringWheel extends Morph {
  onDragStart () {
    this._startRotation = this.rotation;
  }

  onDrag (evt) {
    const angle = evt.state.lastDragPosition.subPt(this.globalBounds().center()).theta();
    const startAngle = evt.state.dragStartPosition.subPt(this.globalBounds().center()).theta();
    this.rotation = this._startRotation + angle - startAngle;
  }
}
