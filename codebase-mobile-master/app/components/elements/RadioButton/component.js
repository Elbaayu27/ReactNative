import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  _renderRadioButtonCircle = () => {
    const { selected = false, disabled, circleStyle } = this.props;
    return (
      <View style={[styles.circle(selected, disabled), circleStyle]}>
        {selected && <View style={styles.selected(disabled)} />}
      </View>
    );
  };

  _renderRadioButtonLabel = () => {
    const { name = '', labelStyle } = this.props;
    return <Text style={[styles.label, labelStyle]}>{name}</Text>;
  };

  _renderRadioButton = () => {
    const { containerStyle, shiftedLabel = true } = this.props;

    return shiftedLabel ? (
      <View style={[styles.container, containerStyle]}>
        {this._renderRadioButtonCircle()}
        {this._renderRadioButtonLabel()}
      </View>
    ) : (
      <View style={[styles.container, containerStyle]}>
        {this._renderRadioButtonLabel()}
        {this._renderRadioButtonCircle()}
      </View>
    );
  };

  _onSelect = () => {
    const { onSelect = noop, name: selectingName, value } = this.props;
    onSelect(selectingName, value);
  };

  render() {
    const { disabled } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this._onSelect}
        activeOpacity={1}
        disabled={disabled}
      >
        {this._renderRadioButton()}
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  circleStyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  labelStyle: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  shiftedLabel: PropTypes.bool,
  disabled: PropTypes.bool
};

Component.defaultProps = {
  labelStyle: {},
  circleStyle: {},
  containerStyle: {},
  shiftedLabel: true,
  disabled: true
};
