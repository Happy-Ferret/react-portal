import Immutable from 'immutable';
import { autoBind } from '../../utils';

import { PortalState } from './PortalState';

export class WidgetModel {
  constructor(pageId, sectionId, model) {
    if (!(model instanceof Immutable.Map)) {
      throw new Error('Not a valid model');
    }
    this._immutable = model;
    this._pageId = pageId;
    this._sectionId = sectionId;
    autoBind(this);
  }

  getImmutable() {
    return this._immutable;
  }

  getPageId() {
    return this._pageId;
  }

  getSectionId() {
    return this._sectionId;
  }

  id() {
    return this.getImmutable().get('id');
  }

  position() {
    return this.getImmutable().get('position');
  }

  updatePosition(position) {
    return WidgetModel.of(
      this._pageId,
      this._sectionId,
      this.getImmutable().updateIn(['position'], () => position));
  }

  preferences() {
    return this.getImmutable().get('preferences');
  }

  updatePreferences(preferences) {
    return WidgetModel.of(
      this._pageId,
      this._sectionId,
      this.getImmutable().updateIn(['preferences'], () => preferences));
  }

  size() {
    return this.getImmutable().get('size');
  }

  updateSize(size) {
    return WidgetModel.of(
      this._pageId, this._sectionId, this.getImmutable().updateIn(['size'], () => size));
  }

  widget() {
    return this.getImmutable().get('widget');
  }

  toJS() {
    return this.getImmutable().toJS();
  }

  mergeIntoModel(model) {
    return PortalState.of(
      model.updateIn([
        'pages', this._pageId,
        'sections', this._sectionId,
        'widget', this.id(),
      ], () => this.getImmutable()));
  }

  static fromJson(pageId, sectionId, model) {
    return new WidgetModel(pageId, sectionId, Immutable.fromJS(model));
  }

  static of(pageId, sectionId, model) {
    return new WidgetModel(pageId, sectionId, model);
  }
}
