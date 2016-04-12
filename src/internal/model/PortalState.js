import Immutable from 'immutable';
import { autoBind } from '../../utils';
import { PageModel } from './PageModel';

export class PortalState {
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

  addPage(page) {
    return PortalState.of(this.getImmutable()
      .setIn(['pages', page.id], Immutable.fromJS(page)));
  }

  removePage(page) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', page.id]));
  }

  removePageById(id) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', id]));
  }

  addSection(toPage, section) {
    return PortalState.of(this.getImmutable()
      .setIn(['pages', toPage.id, 'sections', section.id], Immutable.fromJS(section)));
  }

  removeSection(fromPage, section) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', section.id]));
  }

  removeSectionById(fromPage, id) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', id]));
  }

  addWidget(toPage, toSection, widget) {
    return PortalState.of(this.getImmutable()
      .setIn([
        'pages', toPage.id,
        'sections', toSection.id,
        'widgets', widget.id,
      ], Immutable.fromJS(widget)));
  }

  removeWidget(fromPage, fromSection, widget) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', fromSection.id, 'widgets', widget.id]));
  }

  removeWidgetById(fromPage, fromSection, id) {
    return PortalState.of(this.getImmutable()
      .deleteIn(['pages', fromPage.id, 'sections', fromSection.id, 'widgets', id]));
  }

  findPageByPosition(position) {
    return PageModel.of(this.getImmutable().get('pages')
      .valueSeq()
      .toArray()
      .filter(p => p.get('position') === position)[0]);
  }

  findPageById(atId) {
    return PageModel.of(this.getImmutable().get('pages').get(atId));
  }

  pages() {
    return this.getImmutable()
      .get('pages').valueSeq().toArray()
      .map(s => PageModel.of(s));
  }

  toJS() {
    return this.getImmutable().toJS();
  }

  static fromJson(model) {
    return new PortalState(Immutable.fromJS(model));
  }

  static of(model) {
    return new PortalState(model);
  }
}
