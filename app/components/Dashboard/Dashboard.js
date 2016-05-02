import React, {
  Component,
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import { getRepos } from '../../utils/api';

import Profile from '../Profile/Profile';
import Repositories from '../Repositories/Repositories';

class Dashboard extends Component {

  goToProfile (e) {
    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  goToRepos (e) {
    getRepos(this.props.userInfo.login).then((res) => {
      this.props.navigator.push({
        title: 'Repos',
        component: Repositories,
        passProps: {
          userInfo: this.props.userInfo,
          repos: res
        }
      });
    });
  }
  goToNotes (e) {
    this.props.navigator.push({
      title: 'Profile',
      component: Dashboard,
      passProps: { userInfo: this.props.userInfo }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={ { uri: this.props.userInfo.avatar_url } } style={styles.image} />
        <TouchableHighlight
          style={[styles.btn, styles.btn1]}
          onPress={this.goToProfile.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.btn, styles.btn2]}
          onPress={this.goToRepos.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.btn, styles.btn3]}
          onPress={this.goToNotes.bind(this)}
          underlayColor="#88D4F5">
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btn1: {
    backgroundColor: '#48bbec'
  },
  btn2: {
    backgroundColor: '#a77aae'
  },
  btn3: {
    backgroundColor: '#758bf4'
  }
});

export default Dashboard;
