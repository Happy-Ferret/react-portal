export const defaultStyle = {
  Portal: {

  },
  SectionLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  Section: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
  },
  WidgetContainer: {
    border: '1px solid #ccc',
    padding: '5px 5px 5px 5px',
    marginLeft: 5,
    marginBottom: 5,
    transition: 'display',
    transitionDuration: '1s',
    transitionTimingFunction: 'ease-out',
  },
  WidgetBar: {
    borderBottom: '1px solid #ccc',
    display: 'flex',
    paddingBottom: 5,
    marginBottom: 5,
  },
  WidgetBarButtons: {
    display: 'flex',
    flexGrow: 3,
    marginLeft: 5,
    justifyContent: 'flex-end',
  },
  WidgetBarCloseButton: {

  },
  WidgetBarInfo: {
    flexGrow: 1,
    marginRight: 5,
    justifyContent: 'flex-start',
  },
  WidgetBarMoveButton: {

  },
  WidgetBarPreferencesButton: {

  },
  WidgetBarTitle: {
    flexGrow: 10,
  },
  WidgetBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};