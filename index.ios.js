/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import { Main } from './app/components';

class githubNotetaker extends Component {
  render () {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        component: Main,
        title: 'GitHub NoteTaker'
      }}
    />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
