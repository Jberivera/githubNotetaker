import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Nav extends Component {

  render () {
    const { name, onForward, onBack } = this.props;
    return (
      <View style={styles.nav}>
        <Text>Nav</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    padding: 30,
    marginTop: 0,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(244, 244, 244, 0.5)'
  }
});

export default Nav;
