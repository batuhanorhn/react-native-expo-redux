import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppRouter from './source';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AppRouter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;