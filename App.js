import React, { Component } from 'react';
import { StyleSheet, Text,Dimensions, View, ActivityIndicator, ScrollView, FlatList, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import getData from './data/influencer.json';

import Influencer from './Influencer';
import Company from './company';

var { width, height, scale } = Dimensions.get('window');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    }
  }

  componentDidMount() {
    return fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
        console.log(this.state.dataSource.company['bs'])
      })
      .catch((error) => {
        console.log(error)
      });

    // POSTの仕方

    // fetch('https://facebook.github.io/react-native/movies.json', {
    //   method: 'POPST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstParams: 'yourValue',
    //     secondParam: 'yourOtherValue'
    //   })
    // })
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      let movies = this.state.dataSource.map((val, key) => {
        return <TouchableOpacity onPress={() => alert(val.company['bs'])} key={key} style={styles.item}>
          {/* <Text>{val.company['bs']}</Text>
          <Text>{val.title}</Text> */}
        </TouchableOpacity>
      })

      return (
        <SafeAreaView>
          <ScrollView>
            <ImageBackground
              style={{width: width, height: height}}
              source={require('./assets/dejimon.jpg')}>
              <NativeRouter>
                <Switch>
                  <Route exact path="/" component={Company} />
                  <Route exact path="/influencer" component={Influencer} />
                </Switch>
                <View style={styles.container}>
                  {movies}
                </View>
              </NativeRouter>
            </ImageBackground>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // item: {
  //   flex: 1,
  //   alignSelf: 'stretch',
  //   margin: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#eee'
  // }
});
