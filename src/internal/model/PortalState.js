import Immutable from 'immutable';

export class PortalState {
  constructor(model) {
    this._immutable = Immutable.fromJS(model);
  }
  getImmutable() {
    return this._immutable;
  }
  
}
