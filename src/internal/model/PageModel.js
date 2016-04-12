import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { SectionModel } from './SectionModel';

export class PageModel {
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
  sections() {
    return this.getImmutable()
      .get('sections').valueSeq().toArray()
      .map(s => SectionModel.of(s));
  }
  toJS() {
    return this.getImmutable().toJS();
  }

  static fromJson(model) {
    return new PageModel(Immutable.fromJS(model));
  }
  static of(model) {
    return new PageModel(model);
  }
}
