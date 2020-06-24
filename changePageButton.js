import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

// export default ({history, match}) => {
// locationでデータを渡せて呼び出せる
const ChangePageButton = ({ history }) => {
  return (
    <Button style={styles.button} title="Check Company"  onPress={() => history.push("/")}></Button>
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
  }
});

// withRouterを使うとpropsで渡さなくて良い
export default withRouter(ChangePageButton);
