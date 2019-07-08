import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_CAPTION_PRIMARY,
  COLOR_GREY_DARK,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_EVENT_INACTIVE
} from '../../../styles';

const WIDTH_CIRCLE = 18;
const circle = {
  width: WIDTH_CIRCLE,
  height: WIDTH_CIRCLE,
  borderRadius: WIDTH_CIRCLE / 2,
  borderWidth: 0.5
};

const inCircle = {
  width: 10,
  height: 10,
  borderRadius: 5
};

export default {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  circle: (selected, disabled) => {
    if (selected && disabled) {
      return {
        ...circle,
        margin: 10,
        borderColor: COLOR_BASE_PRIMARY_LIGHT,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: COLOR_WHITE
      };
    }
    return {
      ...circle,
      margin: 10,
      borderColor: selected ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY_DARK,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      backgroundColor: disabled ? COLOR_EVENT_INACTIVE : COLOR_WHITE
    };
  },
  circleActive: {
    ...circle,
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE
  },
  label: {
    ...FONT_CAPTION_PRIMARY,
    color: COLOR_BLACK,
    alignSelf: 'center',
    textAlign: 'left',
    textAlignVertical: 'center'
  },
  selected: disabled => ({
    ...inCircle,
    alignSelf: 'center',
    borderColor: COLOR_WHITE,
    backgroundColor: disabled ? COLOR_BASE_PRIMARY_LIGHT : COLOR_BASE_PRIMARY_MAIN
  })
};
