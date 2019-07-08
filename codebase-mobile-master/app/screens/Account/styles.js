import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_GREY, COLOR_GREY_DARK, FONT_BODY1_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  containerInsideTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GREY
  },
  bottomLineStyle: {
    height: 4
  },
  tabLabelStyle: {
    ...FONT_BODY1_PRIMARY,
    color: COLOR_GREY
  },
  tabSelectedLabel: {
    ...FONT_BODY1_PRIMARY,
    color: COLOR_GREY_DARK
  }
});

export default styles;
