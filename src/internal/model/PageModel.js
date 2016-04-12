import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { SectionModel } from './SectionModel';

export class PageModel {
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

  title() {
    return this.getImmutable().get('title');
  }

  sections() {
    return this.getImmutable()
      .get('sections').valueSeq().toArray()
      .map(s => SectionModel.of(s));
  }

  findSectionById(id) {
    return SectionModel.of(this.getImmutable().get('sections').get(id));
  }

  findSectionByPosition(position) {
    return SectionModel.of(this.getImmutable().get('sections')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
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
