import Immutable from 'immutable';
import { autoBind } from '../../utils';

export class WidgetModel {
  constructor(model) {
    this._immutable = model;
    // TODO : assert if Immutable DS
    autoBind(this);
  }
  getImmutable() {
    return this._immutable;
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
