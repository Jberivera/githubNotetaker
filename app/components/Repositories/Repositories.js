import React, {
  Component,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native';

import Badge from '../Badge/Badge';
import Separator from '../Helpers/Separator';
import Web from '../Helpers/Web';

class Repositories extends Component {
  openPage (url) {
    this.props.navigator.push({
      component: Web,
      title: 'Web View',
      passProps: { url }
    });
  }

  render () {
    const { repos } = this.props;
    const list = repos.map((item, index) => {
      const desc = repos[index].description ? <Text style={styles.description}>{ repos[index].description }</Text> : <Text />;
      return (
        <View key={index}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repos[index].html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}>{repos[index].name}</Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
            {desc}
          </View>
          <Separator />
        </View>
      )
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
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 18,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
    fontSize: 14,
    paddingBottom: 5
  }
});

export default Repositories;
