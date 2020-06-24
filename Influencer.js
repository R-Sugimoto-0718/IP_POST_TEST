import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import ChangePageButton from './changePageButton';

// export default ({history, match}) => {
// locationでデータを渡せて呼び出せる
export default ({ location }) => {

  let influencer = location.state.projects.map((val, key) => {
    // console.log(location.state.projects)
    return <TouchableOpacity onPress={() => alert(val['id'])} key={key} style={styles.item}>
      <Text style={styles.text}>
        Id {val['id']}
      </Text>
      <Text>
        {val['title']}
      </Text>
    </TouchableOpacity>
  })

  return (
    <View style={styles.container}>
      <Text>This is test</Text>
      {/* <Text>{JSON.stringify(location.state.projects[0])}</Text> */}
      <View style={styles.container}>{influencer}</View>
      <ChangePageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  button: {
    width: '100%',
    height: 70,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#3DC0B1'
  },
  text: {
    display: 'flex'
  }
});


