import { uuid } from '../../utils';

export const PortalState = {
  emptyState() {
    return {
      pages: [
        {
          id: uuid(),
          title: 'Page 1',
          position: 0,
          sections: [],
        },
      ],
    };
  },
  sampleState() {
    return {
      pages: [
        {
          id: uuid(),
          title: 'Page 1',
          position: 0,
          sections: [
            {
              id: uuid(),
              position: 0,
              widgets: [
                {
                  id: uuid(),
                  position: 0,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                }, {
                  id: uuid(),
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
              ],
            },
            {
              id: uuid(),
              position: 1,
              widgets: [
                {
                  id: uuid(),
                  position: 0,
                  widget: {
                    view: 'sampleWidget',
                    edit: 'sampleWidgetEdit',
                  },
                  size: {
                    width: 4,
                  },
                  preferences: {},
                }, {
                  id: uuid(),
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
              ],
            },
          ],
        },
      ],
    };
  },
};
