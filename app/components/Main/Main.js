import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

class Main extends Component {

  switchRout (name) {
    switch (name) {
      case 'hello':
        return (<Text>Hello world</Text>);
        break;
      default:
        return (<Text>Default Render</Text>);
    }
  }

  render () {
    const { name, onForward, onBack } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Text>{ name }</Text>
        { this.switchRout(name) }
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
