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
  Navigator
} from 'react-native';

import { Main } from './app/components';

class githubNotetaker extends Component {
  render () {
    return (
      <Navigator styles={styles.container}
        initialRoute={{
          name: 'Github Notetaker',
          index: 0
        }}
        renderScene={(route, navigator) => (
          <Main
            name={route.name}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        )}
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
