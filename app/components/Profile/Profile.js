import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';

class Profile extends Component {

  getRowTitle(user, item){
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0].toUpperCase() + item.slice(1);
  }

  render () {
    const userInfo = this.props.userInfo;
    const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    const list = topicArr.map((item, index) => {
      if(!userInfo[item]){
        return <View key={index} />
      } else {
        return (
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{ this.getRowTitle(userInfo, item) }</Text>
              <Text style={styles.rowContent}>{ userInfo[item] }</Text>
            </View>
            <Separator />
          </View>
        );
      }
    });
    return (
      <ScrollView>
        <Badge userInfo={this.props.userInfo} />
        { list }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

export default Profile;
