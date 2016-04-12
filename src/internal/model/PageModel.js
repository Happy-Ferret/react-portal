import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { SectionModel } from './SectionModel';

import { PortalState } from './PortalState';

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

  updatePosition(position) {
    return SectionModel.of(
      this._pageId,
      this.getImmutable().updateIn(['position'], () => position));
  }

  title() {
    return this.getImmutable().get('title');
  }

  updateTitle(title) {
    return PageModel.of(
      this.getImmutable().updateIn(['title'], () => title));
  }

  sections() {
    return this.getImmutable()
      .get('sections').valueSeq().toArray()
      .map(s => SectionModel.of(this.id(), s));
  }

  addSection(section) {
    return PageModel.of(
      this.getImmutable().setIn(['sections', section.id], Immutable.fromJS(section)));
  }

  removeSection(section) {
    return PageModel.of(
      this.getImmutable().deleteIn(['sections', section.id]));
  }

  removeSectionById(id) {
    return PageModel.of(
      this._pageId,
      this.getImmutable().deleteIn(['sections', id]));
  }

  findSectionById(id) {
    return SectionModel.of(this.id(), this.getImmutable().get('sections').get(id));
  }

  findSectionByPosition(position) {
    return SectionModel.of(this.id(), this.getImmutable().get('sections')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
  }

  toJS() {
    return this.getImmutable().toJS();
  }

  mergeIntoModel(model) {
    return PortalState.of(
      model.updateIn([
        'pages', this.id(),
      ], () => this.getImmutable()));
  }

  static fromJson(model) {
    return new PageModel(Immutable.fromJS(model));
  }

  static of(model) {
    return new PageModel(model);
  }
}
