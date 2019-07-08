import { StyleSheet } from 'react-native';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY, COLOR_TRANSPARENT, FONT_BODY1_PRIMARY } from '../../../styles';

export default StyleSheet.create({
  tabbyContainer: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row'
  },
  tab: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  bottomLine: {
    height: 2,
    backgroundColor: COLOR_TRANSPARENT
  },
  bottomLineHighlight: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  tabLabel: {
    ...FONT_BODY1_PRIMARY,
    paddingVertical: 10,
    alignSelf: 'center',
    color: COLOR_GREY
  },
  tabLabelSelected: {
    color: COLOR_BASE_PRIMARY_MAIN
  }
});
