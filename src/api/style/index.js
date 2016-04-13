const Button = {
  padding: '1px 5px',
  fontSize: 12,
  lineHeight: '1.5',
  borderRadius: 3,
  color: '#000',
  backgroundColor: '#337ab7',
  // border-color: #2e6da4,
  marginBottom: 0,
  fontWeight: 400,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  MsTouchAction: 'manipulation',
  touchAction: 'manipulation',
  cursor: 'pointer',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none',
  backgroundImage: 'none',
  border: '0px solid transparent',
};

const PrimaryButton = {
  color: '#fff',
  backgroundColor: '#337ab7',
};
const SuccessButton = {
  color: '#fff',
  backgroundColor: '#449d44',
};
const InfoButton = {
  color: '#fff',
  backgroundColor: '#31b0d5',
};
const DarkButton = {
  color: '#fff',
  backgroundColor: '#666',
};
const DarkerButton = {
  color: '#fff',
  backgroundColor: '#333',
};
const BlackButton = {
  color: '#fff',
  backgroundColor: '#000',
};
const WarningButton = {
  color: '#fff',
  backgroundColor: '#f0ad4e',
};
const DangerButton = {
  color: '#fff',
  backgroundColor: '#c9302c',
};

export const defaultStyle = {
  AddSectionButton: {
    ...Button,
    ...DarkButton,
    width: 30,
  },
  AddWidgetButton: {
    ...Button,
    ...DarkButton,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: 30,
  },
  DefaultPreferenceView: {
    Container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      flex: '1',
    },
    TextContainer: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextArea: {
      width: '100%',
      height: '100%',
    },
    Buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 5,
    },
  },
  PageButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 50,
  },
  Portal: {

  },
  RemoveSectionButton: {
    ...Button,
    ...BlackButton,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 30,
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
  SectionButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
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
    ...Button,
    ...BlackButton,
    width: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  WidgetBarInfo: {
    flexGrow: 1,
    marginRight: 5,
    cursor: 'pointer',
  },
  WidgetBarMoveButton: {
    ...Button,
    ...DarkerButton,
    width: 20,
    borderRadius: 0,
  },
  WidgetBarPreferencesButton: {
    ...Button,
    ...DarkButton,
    width: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  WidgetBarTitle: {
    flexGrow: 10,
  },
  WidgetBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WidgetNotFound: {
    width: 260,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
