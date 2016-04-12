import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { WidgetModel } from './WidgetModel';

export class SectionModel {
  constructor(model) {
    this._immutable = model;
    // TODO : assert if Immutable DS
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
  widgets() {
    return this.getImmutable()
      .get('widgets').valueSeq().toArray()
      .map(s => WidgetModel.of(s));
  }
  toJS() {
    return this.getImmutable().toJS();
  }

  static fromJson(model) {
    return new SectionModel(Immutable.fromJS(model));
  }
  static of(model) {
    return new SectionModel(model);
  }
}
