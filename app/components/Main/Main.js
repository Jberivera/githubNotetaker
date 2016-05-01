import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Nav from './Nav';

class Main extends Component {

  switchRout (name) {
    switch (name) {
      case 'hello':
        return (<Text style={styles.item}>Hello world</Text>);
        break;
      default:
        return (<Text style={styles.item}>Default Render</Text>);
    }
  }

  render () {
    const { name, onForward, onBack } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Nav />
        { this.switchRout(name) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#48BBEC',
  },
  item: {
    flex: 2
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default Main;
