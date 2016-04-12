import Immutable from 'immutable';
import { autoBind } from '../../utils';

export class WidgetModel {
  constructor(model) {
    if (!(model instanceof Immutable.Map)) {
      throw new Error('Not a valid model');
    }
    this._immutable = model;
    autoBind(this);
  }

  getImmutable() {
    return this._immutable;
  }

  id() {
    return this.getImmutable().get('id');
  }

  position() {
    return this.getImmutable().get('position');
  }

  preferences() {
    return this.getImmutable().get('preferences');
  }

  size() {
    return this.getImmutable().get('size');
  }

  widget() {
    return this.getImmutable().get('widget');
  }

  toJS() {
    return this.getImmutable().toJS();
  }

  static fromJson(model) {
    return new WidgetModel(Immutable.fromJS(model));
  }

  static of(model) {
    return new WidgetModel(model);
  }
}
