import React, {
  Component,
  View,
  WebView,
  StyleSheet
} from 'react-native';

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: this.props.url }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

export default Web;
