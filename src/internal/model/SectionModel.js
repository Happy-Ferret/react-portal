import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { WidgetModel } from './WidgetModel';

import { PortalState } from './PortalState';

export class SectionModel {
  constructor(pageId, sectionId, model) {
    if (!(model instanceof Immutable.Map)) {
      throw new Error('Not a valid model');
    }
    this._immutable = model;
    this._pageId = pageId;
    autoBind(this);
  }

  getImmutable() {
    return this._immutable;
  }

  getPageId() {
    return this._pageId;
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

  widgets() {
    return this.getImmutable()
      .get('widgets').valueSeq().toArray()
      .map(s => WidgetModel.of(this._pageId, this.id(), s));
  }

  addWidget(widget) {
    return SectionModel.of(
      this._pageId,
      this.getImmutable().setIn(['widgets', widget.id], Immutable.fromJS(widget)));
  }

  removeWidget(widget) {
    return SectionModel.of(
      this._pageId,
      this.getImmutable().deleteIn(['widgets', widget.id]));
  }

  removeWidgetById(id) {
    return SectionModel.of(
      this._pageId,
      this.getImmutable().deleteIn(['widgets', id]));
  }

  findWidgetByPosition(position) {
    return WidgetModel.of(this._pageId, this.id(), this.getImmutable().get('widgets')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
  }

  findWidgetById(id) {
    return WidgetModel.of(this._pageId, this.id(), this.getImmutable().get('widgets').get(id));
  }

  toJS() {
    return this.getImmutable().toJS();
  }

  mergeIntoModel(model) {
    return PortalState.of(
      model.updateIn([
        'pages', this._pageId,
        'sections', this.id(),
      ], () => this.getImmutable()));
  }

  static fromJson(pageId, model) {
    return new SectionModel(pageId, Immutable.fromJS(model));
  }

  static of(pageId, model) {
    return new SectionModel(pageId, model);
  }
}
