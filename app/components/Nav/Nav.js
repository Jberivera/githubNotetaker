import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Nav extends Component {

  render () {
    const { name, onForward, onBack } = this.props;
    return (
      <TouchableOpacity key={name}>
        <View style={styles.nav}>
          <Text style={styles.name}>Nav</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    height: 60,
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(243, 247, 247, 0.7)'
  },
  name: {
    backgroundColor: '#FF0000'
  }
});

export default Nav;
