import { uuid } from '../../utils';
import { InternalPortalState } from '../../internal/model/InternalPortalState';

export const PortalState = {
  empty() {
    const pageUUID = uuid();
    return InternalPortalState.fromJson({
      pages: {
        [pageUUID]: {
          id: pageUUID,
          title: 'Page 1',
          position: 0,
          sections: {},
        },
      },
    });
  },
  ofOne(widget, preferences) {
    const pageUUID = uuid();
    const sectionUUID = uuid();
    const widgetUUID = uuid();
    return InternalPortalState.fromJson({
      pages: {
        [pageUUID]: {
          id: pageUUID,
          title: 'Page 1',
          position: 0,
          sections: {
            [sectionUUID]: {
              id: sectionUUID,
              position: 0,
              widgets: {
                [widgetUUID]: {
                  id: widgetUUID,
                  position: 0,
                  widget,
                  size: {
                    width: 4,
                  },
                  preferences,
                },
              },
            },
          },
        },
      },
    });
  },
  sample() {
    const pageUUID = uuid();
    const section1UUID = uuid();
    const section2UUID = uuid();
    const widget1UUID = uuid();
    const widget2UUID = uuid();
    const widget3UUID = uuid();
    const widget4UUID = uuid();
    return InternalPortalState.fromJson({
      pages: {
        [pageUUID]: {
          id: pageUUID,
          title: 'Page 1',
          position: 0,
          sections: {
            [section1UUID]: {
              id: section1UUID,
              position: 0,
              widgets: {
                [widget1UUID]: {
                  id: widget1UUID,
                  position: 0,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                },
                [widget2UUID]: {
                  id: widget2UUID,
                  position: 1,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                },
              },
            },
            [section2UUID]: {
              id: section2UUID,
              position: 1,
              widgets: {
                [widget3UUID]: {
                  id: widget3UUID,
                  position: 0,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                },
                [widget4UUID]: {
                  id: widget4UUID,
                  position: 1,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                },
              },
            },
          },
        },
      },
    });
  },
};
