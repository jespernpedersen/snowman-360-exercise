import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import SnowmanBody from './components/SnowmanBody';

export default class snowman extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <SnowmanBody></SnowmanBody>
      </View>
    );
  }
};

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('snowman', () => snowman);
