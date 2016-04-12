import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { WidgetModel } from './WidgetModel';

export class SectionModel {
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

  widgets() {
    return this.getImmutable()
      .get('widgets').valueSeq().toArray()
      .map(s => WidgetModel.of(s));
  }

  findWidgetByPosition(position) {
    return WidgetModel.of(this.getImmutable().get('widgets')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
  }

  findWidgetById(id) {
    return WidgetModel.of(this.getImmutable().get('widgets').get(id));
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
