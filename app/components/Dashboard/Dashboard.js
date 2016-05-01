import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Dashboard extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  }
});

export default Dashboard;
