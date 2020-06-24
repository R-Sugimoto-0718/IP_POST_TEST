# IP_POST_TEST

    
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null
        }
      }

      // GETの仕方
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
              <Text>{val.company['bs']}</Text>
              <Text>{val.title}</Text>
            </TouchableOpacity>
          })

          return(
            <View style={styles.container}>
              {movies}
            </View>
          )     
         }
