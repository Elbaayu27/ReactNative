import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import { ENDPOINT } from '../../configs';
import { measureNetworkBandwitdh } from '../../utils/checkBandwidth';
import errors from '../../utils/errors';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      bandwitdh: '0'
    };
  }

  async componentDidMount() {
    const { actions } = this.props;
    await actions.fetchGetListUser('1');
    measureNetworkBandwitdh((success, data) => {
      if (success) {
        this.setState({ bandwitdh: data });
      }
    });
  }

  _loadData = async () => {
    try {
      await this.setState({ isLoading: true });
      await ENDPOINT.getListUser('1');
    } catch (error) {
      errors.createError(I18n.t('error.timeOutConnection'));
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { bandwitdh } = this.state;
    const { listUsers } = this.props;
    return (
      <MainScreen isLoading={this.state.isLoading}>
        <Header title="Home" setting back />
        <View style={styles.container}>
          <Text style={{ alignSelf: 'center' }}>{`Bandwidth : ${bandwitdh}`}</Text>
          {listUsers.map(item => (
            <View key={item.id}>
              <Text>{`${item.first_name} ${item.last_name}`}</Text>
              <Image source={{ uri: item.avatar }} style={{ width: 100, height: 150 }} />
            </View>
          ))}
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  listUsers: PropTypes.array
};

Component.defaultProps = {
  listUsers: []
};
