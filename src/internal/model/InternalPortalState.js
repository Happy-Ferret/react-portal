import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { PageModel } from './PageModel';

export class InternalPortalState {
  constructor(model) {
    this._immutable = model;
    // TODO : assert if Immutable DS
    autoBind(this);
  }
  getImmutable() {
    return this._immutable;
  }
  removeWidget(fromPage, fromSection, widget) {
    return InternalPortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', fromSection.id, 'widgets', widget.id]));
  }
  removeSection(fromPage, section) {
    return InternalPortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', section.id]));
  }
  addSection(toPage, section) {
    return InternalPortalState.of(this.getImmutable()
      .setIn(['pages', toPage.id, 'sections', section.id], Immutable.fromJS(section)));
  }
  addWidget(toPage, toSection, widget) {
    return InternalPortalState.of(this.getImmutable()
      .setIn([
        'pages', toPage.id,
        'sections', toSection.id,
        'widgets', widget.id,
      ], Immutable.fromJS(widget)));
  }
  getPageAtPosition(position) {
    return PageModel.of(this.getImmutable().get('pages')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
  }
  toJS() {
    return this.getImmutable().toJS();
  }

  static fromJson(model) {
    return new InternalPortalState(Immutable.fromJS(model));
  }
  static of(model) {
    return new InternalPortalState(model);
  }
}
